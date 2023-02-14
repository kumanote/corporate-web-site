<script setup lang="ts">
  import {
    DeviceTabletIcon,
    CreditCardIcon,
    CircleStackIcon,
  } from '@heroicons/vue/24/outline'
  import { CheckIcon } from '@heroicons/vue/20/solid'
  import BitcoinIcon from '~/components/icons/others/BitcoinIcon.vue'
  import Breadcrumb from '~/components/breadcrumbs/Breadcrumb.vue'
  import TextContainer from '~/components/texts/TextContainer.vue'
  const { t, locale } = useI18n()
  const appConfig = useAppConfig()
  const localeRoute = useLocaleRoute()
  useHead({ title: t('system_development') })
  const useCases = [
    {
      category: 'ec_site',
      icon: CreditCardIcon,
    },
    {
      category: 'cryptocurrency_site',
      icon: BitcoinIcon,
    },
    {
      category: 'karte',
      icon: DeviceTabletIcon,
    },
    {
      category: 'blockchain',
      icon: CircleStackIcon,
    },
  ]
  const features = ['all_in_one', 'anytime', 'operation_billings']
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
</script>

<template>
  <div class="container py-2">
    <Breadcrumb :items="breadcrumbItems" />
  </div>
  <section class="pt-12 pb-16 sm:pb-20 sm:pb-24 lg:pb-28 lg:pb-32">
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
            {{ $t('system_development') }}
          </h2>
          <p
            class="mt-5 mx-auto sm:max-w-3xl text-xl text-gray-500 dark:text-gray-400"
          >
            {{ $t('system_development_description') }}
          </p>
        </div>
        <div class="mx-auto mt-10 sm:mt-12 lg:mt-16">
          <div
            class="relative bg-white rounded-md overflow-hidden shadow-lg shadow-zinc-800/5 backdrop-blur dark:bg-zinc-800/90"
          >
            <div class="hidden lg:block absolute inset-0" aria-hidden="true">
              <div
                class="absolute inset-y-0 right-0 w-1/2 bg-gradient-to-r from-primary-600 to-indigo-400"
              />
            </div>
            <div
              class="relative mx-auto max-w-7xl lg:grid lg:grid-cols-2 lg:px-8"
            >
              <div class="px-6 pt-6 pb-12 lg:px-0 lg:pr-8">
                <div class="mx-auto max-w-lg lg:mx-0">
                  <h2
                    class="text-lg font-semibold text-primary-600 uppercase dark:text-primary-400"
                  >
                    {{ $t('use_case') }}
                  </h2>
                  <p
                    class="mt-2 text-2xl font-bold text-gray-900 sm:text-3xl sm:tracking-tight dark:text-gray-50"
                  >
                    {{ $t('system_development_use_case_title') }}
                  </p>
                  <dl class="mt-12 space-y-10">
                    <div
                      v-for="item in useCases"
                      :key="item.category"
                      class="relative"
                    >
                      <dt>
                        <div
                          class="absolute flex h-12 w-12 items-center justify-center rounded-md bg-primary-500"
                        >
                          <component
                            :is="item.icon"
                            class="h-6 w-6 text-white"
                            aria-hidden="true"
                          />
                        </div>
                        <p
                          class="ml-16 text-lg font-medium leading-6 text-gray-900 dark:text-gray-50"
                        >
                          {{
                            $t(
                              `system_development_use_case.${item.category}.name`
                            )
                          }}
                        </p>
                      </dt>
                      <dd
                        class="mt-2 ml-16 text-base text-gray-500 dark:text-gray-400"
                      >
                        {{
                          $t(
                            `system_development_use_case.${item.category}.description`
                          )
                        }}
                      </dd>
                    </div>
                  </dl>
                </div>
              </div>
              <div
                class="bg-gradient-to-r from-primary-600 to-indigo-400 py-16 px-6 sm:py-24 lg:flex lg:items-center lg:justify-end lg:bg-none lg:px-0 lg:pl-8"
              >
                <div class="mx-auto w-full max-w-lg space-y-8 lg:mx-0">
                  <div>
                    <div class="flex flex-col text-center">
                      <div class="flex items-baseline justify-center gap-x-2">
                        <span
                          class="text-5xl font-bold tracking-tight text-white"
                          >¥1,000,000</span
                        >
                        <span
                          class="text-base font-semibold leading-7 text-gray-100"
                          >/{{ $t('month') }}</span
                        >
                      </div>
                      <span class="mt-2 text-sm font-medium text-primary-100"
                        ><TextContainer
                          :text="$t('system_development_pricing_note')"
                      /></span>
                    </div>
                  </div>
                  <ul
                    role="list"
                    class="space-y-4 text-sm leading-6 text-white"
                  >
                    <li
                      v-for="feature in features"
                      :key="feature"
                      class="flex gap-x-3"
                    >
                      <CheckIcon
                        class="h-6 w-5 flex-none text-green-300"
                        aria-hidden="true"
                      />
                      {{ $t(`system_development_feature.${feature}`) }}
                    </li>
                  </ul>
                  <a
                    target="_blank"
                    :href="appConfig.contactUrl"
                    class="flex w-full items-center justify-center rounded-md border border-transparent bg-white py-4 px-8 text-lg font-medium leading-6 text-primary-700 hover:bg-primary-50 md:px-10"
                    >{{ $t('contact') }}</a
                  >
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
