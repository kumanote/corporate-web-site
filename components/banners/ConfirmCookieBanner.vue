<script setup lang="ts">
  import { useState as useGtagNextState } from 'vue-gtag-next'
  const appConfig = useAppConfig()
  const localePath = useLocalePath()
  const { isEnabled } = useGtagNextState()
  const accepted = ref<boolean | null>(false)
  const acceptTrackingCookieOptions = {
    maxAge: 2147483647, // 68 years
    secure: true,
  }

  const accept = () => {
    const flag = useCookie(
      appConfig.acceptTrackingCookieName,
      acceptTrackingCookieOptions
    )
    flag.value = 'yes'
    if (typeof isEnabled !== 'undefined') isEnabled.value = true
    accepted.value = true
  }
  const reject = () => {
    const flag = useCookie(
      appConfig.acceptTrackingCookieName,
      acceptTrackingCookieOptions
    )
    flag.value = 'no'
    if (typeof isEnabled !== 'undefined') isEnabled.value = false
    accepted.value = false
  }

  onMounted(() => {
    const flag = useCookie(
      appConfig.acceptTrackingCookieName,
      acceptTrackingCookieOptions
    )
    if (flag.value === 'yes') {
      // auto accept
      accept()
    } else if (flag.value === 'no') {
      // auto reject
      reject()
    } else {
      // not decided yet
      accepted.value = null
    }
  })
  const isTrackingAccepted = computed(() => {
    return accepted.value
  })
</script>

<template>
  <div
    v-if="isTrackingAccepted === null"
    class="pointer-events-none fixed inset-x-0 bottom-0 px-4 pb-4"
  >
    <div
      class="pointer-events-auto mx-auto max-w-screen rounded-xl bg-white p-6 ring-1 ring-gray-900/10 dark:bg-gray-900 dark:ring-gray-50/10"
    >
      <p class="text-sm leading-6 text-gray-900 dark:text-gray-50">
        {{ $t('cookie_policy_confirmation') }}
        <a
          target="_blank"
          :href="localePath('/privacy_policy')"
          class="font-semibold text-primary-600 hover:text-primary-500 underline"
          >{{ $t('privacy_policy') }}</a
        >
      </p>
      <div class="mt-4 flex items-center justify-end gap-x-5">
        <button
          type="button"
          class="rounded-md bg-primary-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-primary-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary-500"
          @click="accept"
        >
          {{ $t('accept_all') }}
        </button>
        <button
          type="button"
          class="text-sm font-semibold leading-6 text-gray-700 dark:text-gray-200"
          @click="reject"
        >
          {{ $t('reject_all') }}
        </button>
      </div>
    </div>
  </div>
</template>
