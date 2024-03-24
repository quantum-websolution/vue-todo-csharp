<script setup lang="ts">
interface Props {
  value?: string
  label: string
}

const Props = withDefaults(defineProps<Props>(), {
  value: '',
  label: '',
})

const dialog = ref(false)
const dateValue = ref([])

const updateDate = () => {
  // emit処理
  console.log(dateValue.value)
  dialog.value = false
}
</script>
<template>
  <v-spacer></v-spacer>
  <v-text-field
    :label="label"
    readonly
    v-model="dateValue[0]"
    @click="dialog = !dialog"
  >
  </v-text-field>

  <v-dialog v-model="dialog">
    <v-date-picker v-model="dateValue" @update:modelValue="updateDate()">
    </v-date-picker>
  </v-dialog>
  <v-spacer></v-spacer>
</template>
