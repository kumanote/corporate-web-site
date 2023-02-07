<script setup lang="ts">
  const companyData = [
    'company_name',
    'company_address',
    'company_establishment_date',
    'company_charter_capital',
    'company_business',
    'company_number_of_employees',
  ]
</script>

<template>
  <section class="py-16 sm:py-24 lg:py-32">
    <div
      class="mx-auto max-w-md px-4 sm:px-6 sm:max-w-3xl lg:px-8 lg:max-w-7xl"
    >
      <div>
        <div class="text-center">
          <h2
            class="text-base font-semibold tracking-wider text-primary-600 uppercase"
          >
            {{ $t('about_us') }}
          </h2>
          <p
            class="mt-2 text-3xl font-extrabold text-gray-900 dark:text-gray-50 tracking-tight sm:text-4xl"
          >
            {{ $t('company_information') }}
          </p>
        </div>
        <div class="overflow-hidden">
          <div class="mt-8">
            <dl>
              <div
                v-for="(item, index) in companyData"
                :key="item"
                class="px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6"
                :class="{
                  'bg-gray-100 dark:bg-gray-800': index % 2 === 0,
                  'bg-transparent': index % 2 === 1,
                }"
              >
                <dt
                  class="text-sm font-medium text-gray-500 dark:text-gray-400 capitalize"
                >
                  {{ $t(item) }}
                </dt>
                <dd
                  class="mt-1 text-sm text-gray-900 dark:text-gray-50 sm:mt-0 sm:col-span-2"
                >
                  {{ $t(`${item}_value`) }}
                </dd>
              </div>
            </dl>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
