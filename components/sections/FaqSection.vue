<script setup>
  const faqs = ['business', 'flow', 'help']
  const { locale } = useI18n()
  const localePath = useLocalePath()
</script>

<template>
  <section class="bg-gray-50 dark:bg-gray-800">
    <div class="container py-24 sm:pt-32 lg:py-40">
      <div class="lg:grid lg:grid-cols-12 lg:gap-8">
        <div class="lg:col-span-5">
          <h2
            class="text-2xl font-bold leading-10 tracking-tight text-gray-900 dark:text-gray-50"
          >
            {{ $t('faq_title') }}
          </h2>
          <p class="mt-4 text-base leading-7 text-gray-600 dark:text-gray-400">
            <template v-if="locale === 'en'">
              For official company information, please visit
              <NuxtLink
                :href="localePath('/about')"
                class="text-primary-600 hover:text-primary-500 underline font-semibold dark:text-primary-500 dark:hover:text-primary-600"
                >here</NuxtLink
              >.
            </template>
            <template v-else>
              会社情報は<NuxtLink
                :href="localePath('/about')"
                class="text-primary-600 hover:text-primary-500 underline font-semibold dark:text-primary-500 dark:hover:text-primary-600"
                >こちら</NuxtLink
              >をご覧ください。
            </template>
          </p>
        </div>
        <div class="mt-10 lg:col-span-7 lg:mt-0">
          <dl class="space-y-10">
            <div v-for="item in faqs" :key="item">
              <dt
                class="text-base font-semibold leading-7 text-gray-900 dark:text-gray-50"
              >
                {{ $t(`faq.${item}.question`) }}
              </dt>
              <dd
                class="mt-2 text-base leading-7 text-gray-600 break-words dark:text-gray-400"
              >
                {{ $t(`faq.${item}.answer`) }}
              </dd>
            </div>
          </dl>
        </div>
      </div>
    </div>
  </section>
</template>
