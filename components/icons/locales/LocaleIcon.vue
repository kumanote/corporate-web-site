<script setup lang="ts">
  import JaIcon from '~/components/icons/locales/JaIcon.vue'
  import EnIcon from '~/components/icons/locales/EnIcon.vue'

  interface Props {
    locale: string
  }
  withDefaults(defineProps<Props>(), {
    locale: 'ja',
  })
</script>

<template>
  <EnIcon v-if="locale === 'en'" />
  <JaIcon v-else />
</template>
