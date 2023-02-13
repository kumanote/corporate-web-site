<script setup lang="ts">
  import ServiceListSection from '~/components/sections/ServiceListSection.vue'
  const { t } = useI18n()
  useHead({ title: t('service') })
</script>

<template>
  <ServiceListSection />
</template>
