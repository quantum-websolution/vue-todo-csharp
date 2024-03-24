<script setup lang="ts">
import { todolist } from '@/data/todolist'
const search = ref('')

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
</script>
<template>
  <v-card class="pa-4">
    <v-form>
      <v-container class="d-flex">
        <v-row>
          <v-col cols="12" md="4">
            <TextInput label="予定" />
          </v-col>
          <v-col cols="12" md="4">
            <TextInput label="詳細" />
          </v-col>
          <v-col cols="12" md="4">
            <TextInput label="場所" />
          </v-col>
          <v-col cols="12" md="4">
            <DateInput label="期限" />
          </v-col>
          <v-col cols="12" md="4">
            <TextInput label="備考" />
          </v-col>
          <v-col cols="12" md="4" class="d-flex align-center justify-end">
            <DefaultButton title="登録" type="primary" />
          </v-col>
        </v-row>
      </v-container>
    </v-form>
  </v-card>

  <v-card title="予定一覧" flat class="pa-8">
    <template v-slot:text>
      <v-text-field
        v-model="search"
        label="Search"
        prepend-inner-icon="mdi-magnify"
        variant="outlined"
        hide-details
        single-line
      ></v-text-field>
    </template>

    <v-data-table
      :headers="(headers as any)"
      :items="todolist"
      :search="search"
    ></v-data-table>
  </v-card>
</template>
