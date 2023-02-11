<script setup lang="ts">
  import AppFooter from '~/components/footers/AppFooter.vue'
  import AppHero from '~/components/heros/AppHero.vue'
  import AppHeader from '~/components/headers/AppHeader.vue'
  import FaqSection from '~/components/sections/FaqSection.vue'
  import ServiceListSection from '~/components/sections/ServiceListSection.vue'
  import BlogSection from '~/components/sections/BlogSection.vue'
  import { ActivitySearchResult } from '~/api/schema/blog/activity'
  definePageMeta({
    layout: 'top',
  })
  const appConfig = useAppConfig()
  const { data: activitiesSearchResult } = await useFetch<ActivitySearchResult>(
    `${appConfig.blogApiBaseUrl}/activities/search`,
    {
      method: 'GET',
      params: {
        type: 'latest',
        skip: 0,
        limit: 3,
      },
    }
  )
</script>

<template>
  <div class="absolute top-0 w-full bg-transparent">
    <AppHeader />
  </div>
  <main>
    <AppHero />
    <FaqSection />
    <ServiceListSection />
    <BlogSection
      v-if="activitiesSearchResult?.list"
      :activities="activitiesSearchResult?.list || []"
    />
  </main>
  <AppFooter />
</template>
