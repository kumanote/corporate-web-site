<script setup lang="ts">
  import TwitterIcon from '~/components/icons/socials/TwitterIcon.vue'
  import GithubIcon from '~/components/icons/socials/GithubIcon.vue'
  import TextContainer from '~/components/texts/TextContainer.vue'
  const appConfig = useAppConfig()
</script>

<template>
  <section class="py-16 sm:py-24 lg:py-32">
    <div
      class="mx-auto max-w-md px-4 sm:px-6 sm:max-w-3xl lg:px-8 lg:max-w-7xl"
    >
      <div class="text-center">
        <p
          class="mt-2 text-3xl font-extrabold text-gray-900 dark:text-gray-50 tracking-tight sm:text-4xl capitalize"
        >
          {{ $t('members') }}
        </p>
      </div>
      <div class="mt-8 sm:mt-18">
        <ul
          role="list"
          class="space-y-12 sm:-mt-8 sm:space-y-0 sm:divide-y sm:divide-gray-200 lg:gap-x-8 lg:space-y-0"
        >
          <li class="sm:py-8">
            <div
              class="space-y-4 sm:grid sm:grid-cols-3 sm:items-start sm:gap-6 sm:space-y-0"
            >
              <div class="space-y-4">
                <div class="aspect-w-1 aspect-h-1">
                  <img
                    class="rounded-lg object-cover shadow-lg"
                    src="/images/members/tanaka.png"
                    alt="Hiroki Tanaka"
                  />
                </div>
                <ul role="list" class="flex space-x-5">
                  <li>
                    <a
                      target="_blank"
                      :href="appConfig.members.hirokiTanaka.twitterUrl"
                      class="text-gray-400 hover:text-gray-500 dark:text-gray-500 dark:hover:text-gray-400"
                    >
                      <TwitterIcon class="h-6 w-6" />
                    </a>
                  </li>
                  <li>
                    <a
                      target="_blank"
                      :href="appConfig.members.hirokiTanaka.githubUrl"
                      class="text-gray-400 hover:text-gray-500 dark:text-gray-500 dark:hover:text-gray-400"
                    >
                      <GithubIcon class="h-6 w-6" />
                    </a>
                  </li>
                </ul>
              </div>
              <div class="sm:col-span-2">
                <div class="space-y-4">
                  <div class="space-y-1 text-lg font-medium leading-6">
                    <h3>{{ $t('members_data.hiroki_tanaka.name') }}</h3>
                    <p class="text-primary-600">
                      {{ $t('members_data.hiroki_tanaka.role') }}
                    </p>
                  </div>
                  <div class="text-lg space-y-6">
                    <p class="text-gray-500 dark:text-gray-400">
                      {{ $t('members_data.hiroki_tanaka.bio') }}
                    </p>
                    <div class="text-gray-500 dark:text-gray-400">
                      <TextContainer
                        :text="$t('members_data.hiroki_tanaka.description')"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </li>
          <li class="sm:py-8">
            <div
              class="relative rounded-lg overflow-hidden bg-gray-900 py-12 px-6 sm:py-16 lg:px-8 dark:bg-gray-800"
            >
              <div class="mx-auto max-w-2xl text-center">
                <h2
                  class="text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-primary-50 to-primary-600 sm:text-3xl uppercase"
                >
                  designer
                </h2>
                <p class="mt-3 text-lg leading-8 text-gray-300">
                  <TextContainer :text="$t('members_data.designer_note')" />
                </p>
              </div>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 1024 1024"
                class="absolute top-1/2 left-1/2 h-[64rem] w-[64rem] -translate-x-1/2 [mask-image:radial-gradient(closest-side,white,transparent)]"
                aria-hidden="true"
              >
                <circle
                  cx="512"
                  cy="512"
                  r="512"
                  fill="url(#gradient-circle)"
                  fill-opacity="0.7"
                />
                <defs>
                  <radialGradient id="gradient-circle">
                    <stop offset="0" stop-color="#0369a1" />
                    <stop offset="1" stop-color="#bae6fd" />
                  </radialGradient>
                </defs>
              </svg>
            </div>
          </li>
        </ul>
      </div>
    </div>
  </section>
</template>
