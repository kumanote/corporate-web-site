<script setup lang="ts">
  const { t } = useI18n()
  const capitalize = (s: string) => {
    const words = s.split(' ')
    if (!words) return s
    return words
      .map((word) => {
        return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase()
      })
      .join(' ')
  }
  useHead({
    titleTemplate: (s) => {
      return s ? `${capitalize(s)} - ${t('author')}` : t('author')
    },
    meta: [
      { name: 'description', content: t('site_description') },
      { property: 'og:title', content: t('author') },
      {
        property: 'og:description',
        content: t('site_description'),
      },
    ],
  })
</script>

<template>
  <NuxtLayout>
    <NuxtLoadingIndicator />
    <NuxtPage />
  </NuxtLayout>
</template>
