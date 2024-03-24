<script setup lang="ts">
interface Props {
  label: string
}

const Props = withDefaults(defineProps<Props>(), {
  label: '',
})
</script>
<template>
  <div>
    <v-text-field :label="label" />
  </div>
</template>
