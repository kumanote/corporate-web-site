<script setup lang="ts">
  import AppFooter from '~/components/footers/AppFooter.vue'
  import AppHero from '~/components/heros/AppHero.vue'
  definePageMeta({
    layout: 'top',
  })
</script>

<template>
  <AppHero />
  <AppFooter />
</template>
