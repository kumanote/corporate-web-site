<script setup lang="ts">
  import Breadcrumb from '~/components/breadcrumbs/Breadcrumb.vue'
  import BlogSection from '~/components/sections/BlogSection.vue'
  import BlogAppSection from '~/components/sections/BlogAppSection.vue'
  import HelpDeskSection from '~/components/sections/HelpDeskSection.vue'
  import { ActivitySearchResult } from '~/api/schema/blog/activity'
  const appConfig = useAppConfig()
  const localeRoute = useLocaleRoute()
  const { locale, t } = useI18n()
  useHead({ title: t('our_products') })
  const breadcrumbItems = [
    {
      name: 'service',
      href: localeRoute('/services', locale.value)?.path,
    },
    {
      name: 'system_development',
      href: localeRoute('/services/system_development', locale.value)?.path,
    },
  ]
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
  <div class="container py-2">
    <Breadcrumb :items="breadcrumbItems" />
  </div>
  <div class="pt-12 pb-16 sm:pb-20 sm:pb-24 lg:pb-28 lg:pb-32">
    <div class="container">
      <div>
        <div class="text-center">
          <p
            class="text-base font-semibold tracking-wider text-primary-600 uppercase"
          >
            {{ $t('service') }}
          </p>
          <h2
            id="system_development"
            class="mt-2 text-3xl font-extrabold text-gray-900 dark:text-gray-50 tracking-tight sm:text-4xl uppercase"
          >
            {{ $t('our_products') }}
          </h2>
          <p
            class="mt-5 mx-auto sm:max-w-3xl text-xl text-gray-500 dark:text-gray-400"
          >
            {{ $t('our_products_description') }}
          </p>
        </div>
      </div>
    </div>
    <HelpDeskSection />
    <BlogSection
      v-if="activitiesSearchResult?.list"
      :activities="activitiesSearchResult?.list || []"
    />
    <BlogAppSection />
  </div>
</template>
