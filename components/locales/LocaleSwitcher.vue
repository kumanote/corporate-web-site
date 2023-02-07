<script setup>
  import { Popover, PopoverButton, PopoverPanel } from '@headlessui/vue'
  import LocaleIcon from '~/components/icons/locales/LocaleIcon.vue'

  const { locale, locales } = useI18n()
  const switchLocalePath = useSwitchLocalePath()
</script>

<template>
  <Popover v-slot="{ open }" class="relative">
    <PopoverButton
      :class="[
        open ? 'text-gray-900' : 'text-gray-500',
        'group inline-flex items-center rounded-full shadow-xl shadow-zinc-800/5 ring-1 ring-zinc-900/5 backdrop-blur transition dark:bg-zinc-800/90 dark:ring-white/10 dark:hover:ring-white/20',
      ]"
    >
      <LocaleIcon
        :locale="locale"
        class="h-6 w-6 rounded-full overflow-hidden"
      />
    </PopoverButton>

    <transition
      enter-active-class="transition ease-out duration-200"
      enter-from-class="opacity-0 translate-y-1"
      enter-to-class="opacity-100 translate-y-0"
      leave-active-class="transition ease-in duration-150"
      leave-from-class="opacity-100 translate-y-0"
      leave-to-class="opacity-0 translate-y-1"
    >
      <PopoverPanel
        class="absolute -right-3 z-10 mt-3 w-screen max-w-36 -translate-x-1 transform"
      >
        <div
          class="overflow-hidden rounded-lg shadow-lg ring-1 ring-black ring-opacity-5"
        >
          <div class="relative grid bg-white dark:bg-gray-700">
            <PopoverButton
              v-for="item in locales"
              :key="item.code"
              as="a"
              :href="switchLocalePath(item.code)"
              class="block p-3 transition duration-150 ease-in-out"
              :class="{
                'hover:bg-gray-50 dark:hover:bg-gray-600': item.code !== locale,
                'bg-primary-50 dark:bg-primary-800': item.code === locale,
              }"
            >
              <p
                class="text-sm"
                :class="{
                  'text-gray-900 dark:text-gray-50': item.code !== locale,
                  'text-primary-500 dark:text-primary-400':
                    item.code === locale,
                }"
              >
                {{ item.name }}
              </p>
            </PopoverButton>
          </div>
        </div>
      </PopoverPanel>
    </transition>
  </Popover>
</template>
