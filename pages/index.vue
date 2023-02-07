<script setup lang="ts">
  import AppFooter from '~/components/footers/AppFooter.vue'
  import AppHero from '~/components/heros/AppHero.vue'
  import AppHeader from '~/components/headers/AppHeader.vue'
  definePageMeta({
    layout: 'top',
  })
</script>

<template>
  <div class="absolute top-0 w-full bg-transparent">
    <AppHeader />
  </div>
  <main>
    <AppHero />
  </main>
  <AppFooter />
</template>
