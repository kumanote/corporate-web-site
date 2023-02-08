<script setup lang="ts">
  interface Props {
    text: string
  }
  const props = withDefaults(defineProps<Props>(), {
    text: '',
  })
  const lines = computed(() => {
    return props.text.split('\n')
  })
</script>

<template>
  <template v-for="(line, index) in lines" :key="index"
    >{{ line }}<br
  /></template>
</template>
