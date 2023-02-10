<script setup lang="ts">
  import AppFooter from '~/components/footers/AppFooter.vue'
  import AppHeader from '~/components/headers/AppHeader.vue'
  import ErrorContent from '~/components/errors/ErrorContent.vue'
  interface Error {
    statusCode?: number | string
  }
  interface Props {
    error: Error
  }
  defineProps<Props>()
</script>

<template>
  <div
    class="min-h-screen flex flex-col font-inter tracking-tight antialiased bg-white text-gray-900 dark:bg-gray-900 dark:text-gray-50"
  >
    <AppHeader />
    <main
      class="flex-grow flex items-center justify-center mx-auto max-w-md px-4 py-16 sm:px-6 sm:max-w-3xl lg:px-8 lg:max-w-7xl"
    >
      <ErrorContent :error="error" />
    </main>
    <AppFooter />
  </div>
</template>
