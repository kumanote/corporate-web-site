<script setup lang="ts">
  const localePath = useLocalePath()
</script>

<template>
  <NuxtLink :href="localePath('/')">
    <img
      src="~/assets/images/logo.png"
      :alt="$t('author')"
      class="w-full h-full"
    />
  </NuxtLink>
</template>
