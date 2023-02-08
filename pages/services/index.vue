<script setup>
  import {
    HomeModernIcon,
    ServerStackIcon,
    ChatBubbleOvalLeftEllipsisIcon,
    ArrowRightIcon,
  } from '@heroicons/vue/20/solid'
  const localePath = useLocalePath()

  const services = [
    {
      name: 'system_development',
      description: 'system_development_description',
      href: '/services/system_development',
      icon: ServerStackIcon,
    },
    {
      name: 'consultant',
      description: 'consultant_description',
      href: '/services/consultant',
      icon: ChatBubbleOvalLeftEllipsisIcon,
    },
    {
      name: 'our_products',
      description: 'our_products_description',
      href: '/services/our_products',
      icon: HomeModernIcon,
    },
  ]
</script>

<template>
  <section class="py-16 sm:py-24 lg:py-32">
    <div
      class="mx-auto max-w-md px-4 sm:px-6 sm:max-w-3xl lg:px-8 lg:max-w-7xl"
    >
      <div>
        <div class="text-center">
          <p
            class="text-base font-semibold tracking-wider text-primary-600 uppercase"
          >
            kumanote
          </p>
          <h2
            id="system_development"
            class="mt-2 text-3xl font-extrabold text-gray-900 dark:text-gray-50 tracking-tight sm:text-4xl"
          >
            {{ $t('service') }}
          </h2>
          <p
            class="mt-5 mx-auto sm:max-w-3xl text-xl text-gray-500 dark:text-gray-400"
          >
            {{ $t('service_description') }}
          </p>
        </div>
        <div class="mx-auto mt-10 sm:mt-12 lg:mt-16">
          <dl class="grid grid-cols-1 gap-x-8 gap-y-16 lg:grid-cols-3">
            <div
              v-for="item in services"
              :key="item.name"
              class="flex flex-col"
            >
              <dt
                class="flex items-center gap-x-3 text-base font-semibold leading-7 text-gray-900"
              >
                <component
                  :is="item.icon"
                  class="h-5 w-5 flex-none text-primary-600"
                  aria-hidden="true"
                />
                {{ $t(item.name) }}
              </dt>
              <dd
                class="mt-4 flex flex-auto flex-col text-base leading-7 text-gray-600"
              >
                <p class="flex-auto">{{ $t(item.description) }}</p>
                <p class="mt-6">
                  <NuxtLink
                    :href="localePath(item.href)"
                    class="text-base font-semibold leading-7 text-primary-600 flex items-center space-x-1"
                    ><span>{{ $t('view_details') }}</span
                    ><ArrowRightIcon class="w-4 h-4"
                  /></NuxtLink>
                </p>
              </dd>
            </div>
          </dl>
        </div>
      </div>
    </div>
  </section>
</template>
