<script setup lang="ts">
interface Props {
  title: string
  type: string
  size: string
}

const Props = withDefaults(defineProps<Props>(), {
  title: '',
  type: '',
  size: '',
})
</script>
<template>
  <v-app>
    <v-container>
      <v-btn :color="type"> {{ title }} </v-btn>
    </v-container>
  </v-app>
</template>
