<script setup lang="ts">
  import AppFooter from '~/components/footers/AppFooter.vue'
</script>

<template>
  <div
    class="min-h-screen flex flex-col font-inter tracking-tight antialiased bg-gray-100 text-gray-900 dark:bg-gray-700 dark:text-gray-50"
  >
    <main class="flex-grow">
      <slot />
    </main>
    <AppFooter />
  </div>
</template>
