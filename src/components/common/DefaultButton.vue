<script setup lang="ts">
interface Props {
  title: string
  type?: string
  size?: string
}

const Props = withDefaults(defineProps<Props>(), {
  title: '',
  type: '',
  size: '',
})
</script>
<template>
  <div>
    <v-btn :color="type"> {{ title }} </v-btn>
  </div>
</template>
