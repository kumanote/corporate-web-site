<script setup lang="ts">
  import ConfirmCookieBanner from '~/components/banners/ConfirmCookieBanner.vue'
</script>

<template>
  <div class="relative font-inter tracking-tight antialiased">
    <slot />
    <ConfirmCookieBanner />
  </div>
</template>
