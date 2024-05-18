<script setup lang="ts">
import { useDateFormat } from '@vueuse/core'
// 登録する内容
const title = ref<string>('')
const detail = ref<string>('')
const place = ref<string>('')
const remarks = ref<string>('')

const deadline = ref<Date[]>([])
const formatDate = ref<string>('')

const updateDate = () => {
  deadlineDialog.value = false
  if (!deadline) return
  formatDate.value = useDateFormat(
    deadline.value.toString(),
    'YYYY-MM-DD(dd)hh:mm:ss',
  ).value
}

const deadlineDialog = ref(false)

// 一覧の内容を格納する変数
const items = ref<TodolistResponse[]>([])

// 削除するIDを格納
const selectedIds = ref<number[]>([])

const headers = [
  {
    align: 'start',
    key: 'id',
    sortable: false,
    title: 'No',
  },
  { key: 'title', title: '予定' },
  { key: 'detail', title: '詳細' },
  { key: 'place', title: '場所' },
  { key: 'deadline', title: '期日' },
  { key: 'remarks', title: '備考' },
  { key: 'isOverdue', title: '期限切れ' },
]

const { public: publicConfig } = useRuntimeConfig()
const fetchData = async () => {
  await $fetch<TodolistResponse[]>(`${publicConfig.apiUrl}/api/todolist`, {
    method: 'GET',
  }).then((data) => Object.assign(items.value, data))
}

onMounted(async () => {
  await fetchData()
})

const onClickRegister = async () => {
  const request = {
    title: title.value,
    detail: detail.value,
    place: place.value,
    deadline: formatDate.value,
    remarks: remarks.value,
  }
  await $fetch<TodolistResponse[]>(`${publicConfig.apiUrl}/api/todolist`, {
    method: 'POST',
    body: JSON.stringify(request),
  }).then((num) => console.log(num))
  await fetchData()
}

const onClickDelete = async () => {
  await $fetch<TodolistResponse[]>(`${publicConfig.apiUrl}/api/todolist`, {
    method: 'DELETE',
    body: JSON.stringify(selectedIds.value),
  }).then((num) => console.log(num))
  await fetchData()
}
</script>
<template>
  <v-card class="pa-4">
    <v-form>
      <v-container class="d-flex">
        <v-row>
          <v-col cols="12" md="4">
            <v-text-field clearable label="予定" v-model="title" />
          </v-col>
          <v-col cols="12" md="4">
            <v-text-field label="詳細" v-model="detail" />
          </v-col>
          <v-col cols="12" md="4">
            <v-text-field label="場所" v-model="place" />
          </v-col>
          <v-col cols="12" md="4">
            <v-spacer></v-spacer>
            <v-text-field
              label="期限"
              readonly
              v-model="formatDate"
              @click="deadlineDialog = !deadlineDialog"
            >
            </v-text-field>

            <v-dialog v-model="deadlineDialog">
              <v-date-picker
                v-model="deadline"
                @update:model-value="updateDate()"
              >
              </v-date-picker>
            </v-dialog>
            <v-spacer></v-spacer>
          </v-col>
          <v-col cols="12" md="4">
            <v-text-field label="備考" v-model="remarks" />
          </v-col>
          <v-col cols="12" md="4" class="d-flex align-center justify-end">
            <DefaultButton
              title="登録"
              type="primary"
              @click="onClickRegister"
            />
            <DefaultButton title="削除" type="primary" @click="onClickDelete" />
          </v-col>
        </v-row>
      </v-container>
    </v-form>
  </v-card>

  <v-card title="予定一覧" flat class="pa-8">
    <v-data-table
      v-model="selectedIds"
      :headers="(headers as any)"
      :items="items"
      show-select
    ></v-data-table>
  </v-card>
</template>
