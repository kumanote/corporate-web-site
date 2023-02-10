<script setup lang="ts">
  import AppLogo from '~/components/logos/AppLogo.vue'
  import FacebookIcon from '~/components/icons/socials/FacebookIcon.vue'
  import TwitterIcon from '~/components/icons/socials/TwitterIcon.vue'
  import GithubIcon from '~/components/icons/socials/GithubIcon.vue'
  import FeedlyIcon from '~/components/icons/socials/FeedlyIcon.vue'
  import AppStoreBadge from '~/components/badges/AppStoreBadge.vue'
  import GooglePlayStoreBadge from '~/components/badges/GooglePlayStoreBadge.vue'
  const appConfig = useAppConfig()
  const urls = {
    contact: appConfig.contactUrl,
    facebook: appConfig.facebookUrl,
    twitter: appConfig.twitterUrl,
    github: appConfig.githubUrl,
    feedly: appConfig.feedlyUrl,
    blog: appConfig.blogTopUrl,
    blogActivities: appConfig.blogActivitiesUrl,
    blogSeries: appConfig.blogSeriesUrl,
  }
  const localePath = useLocalePath()
</script>

<template>
  <footer class="bg-gray-100 dark:bg-gray-700">
    <div class="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8">
      <div class="xl:grid xl:grid-cols-3 xl:gap-8">
        <div class="space-y-8 xl:col-span-1">
          <AppLogo class="w-14 h-14 inline-block" />
          <div class="flex space-x-6">
            <a
              target="_blank"
              :href="urls.facebook"
              class="text-gray-400 dark:text-gray-500 hover:text-gray-500 dark:hover:text-gray-400"
            >
              <span class="sr-only">Facebook</span>
              <FacebookIcon class="h-6 w-6" />
            </a>
            <a
              target="_blank"
              :href="urls.twitter"
              class="text-gray-400 dark:text-gray-500 hover:text-gray-500 dark:hover:text-gray-400"
            >
              <span class="sr-only">Twitter</span>
              <TwitterIcon class="h-6 w-6" />
            </a>
            <a
              target="_blank"
              :href="urls.github"
              class="text-gray-400 dark:text-gray-500 hover:text-gray-500 dark:hover:text-gray-400"
            >
              <span class="sr-only">GitHub</span>
              <GithubIcon class="h-6 w-6" />
            </a>
            <a
              target="_blank"
              :href="urls.feedly"
              class="text-gray-400 dark:text-gray-500 hover:text-gray-500 dark:hover:text-gray-400"
            >
              <span class="sr-only">Feedly</span>
              <FeedlyIcon class="h-6 w-6" />
            </a>
          </div>
          <div class="flex items-center space-x-2">
            <a
              target="_blank"
              href="https://apps.apple.com/jp/app/kumanote/id1567138466"
              class="w-28 text-white hover:text-gray-200 dark:hover:text-gray-200"
            >
              <AppStoreBadge />
            </a>
            <a
              target="_blank"
              href="https://play.google.com/store/apps/details?id=com.kumanote.portfolio"
              class="w-28 text-white hover:text-gray-200 dark:hover:text-gray-200"
            >
              <GooglePlayStoreBadge />
            </a>
          </div>
        </div>
        <div class="mt-12 grid grid-cols-2 gap-8 xl:mt-0 xl:col-span-2">
          <div class="md:grid md:grid-cols-2 md:gap-8">
            <div>
              <h3
                class="text-sm font-semibold text-gray-700 dark:text-gray-200 tracking-wider uppercase"
              >
                {{ $t('service') }}
              </h3>
              <ul class="mt-4 space-y-4">
                <li>
                  <NuxtLink
                    :href="localePath('/services/system_development')"
                    class="text-base text-gray-500 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-200 capitalize"
                  >
                    {{ $t('system_development') }}
                  </NuxtLink>
                </li>
                <li>
                  <NuxtLink
                    :href="localePath('/services/consultant')"
                    class="text-base text-gray-500 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-200 capitalize"
                  >
                    {{ $t('consultant') }}
                  </NuxtLink>
                </li>
                <li>
                  <NuxtLink
                    :href="localePath('/services/our_products')"
                    class="text-base text-gray-500 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-200 capitalize"
                  >
                    {{ $t('our_products') }}
                  </NuxtLink>
                </li>
              </ul>
            </div>
            <div class="mt-12 md:mt-0">
              <h3
                class="text-sm font-semibold text-gray-700 dark:text-gray-200 tracking-wider uppercase"
              >
                {{ $t('blog') }}
              </h3>
              <ul class="mt-4 space-y-4">
                <li>
                  <a
                    target="_blank"
                    :href="urls.blog"
                    class="text-base text-gray-500 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-200 capitalize"
                  >
                    {{ $t('blog_top') }}
                  </a>
                </li>
                <li>
                  <a
                    target="_blank"
                    :href="urls.blogActivities"
                    class="text-base text-gray-500 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-200 capitalize"
                  >
                    {{ $t('blog_activities') }}
                  </a>
                </li>
                <li>
                  <a
                    target="_blank"
                    :href="urls.blogSeries"
                    class="text-base text-gray-500 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-200 capitalize"
                  >
                    {{ $t('blog_series') }}
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div class="md:grid md:grid-cols-2 md:gap-8">
            <div>
              <h3
                class="text-sm font-semibold text-gray-700 dark:text-gray-200 tracking-wider uppercase"
              >
                {{ $t('about_us') }}
              </h3>
              <ul class="mt-4 space-y-4">
                <li>
                  <NuxtLink
                    :href="localePath('/about')"
                    class="text-base text-gray-500 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-200 capitalize"
                  >
                    {{ $t('about_us') }}
                  </NuxtLink>
                </li>
                <li>
                  <NuxtLink
                    :href="localePath('/members')"
                    class="text-base text-gray-500 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-200 capitalize"
                  >
                    {{ $t('members') }}
                  </NuxtLink>
                </li>
                <li>
                  <a
                    target="_blank"
                    :href="urls.contact"
                    class="text-base text-gray-500 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-200 capitalize"
                  >
                    {{ $t('contact') }}
                  </a>
                </li>
              </ul>
            </div>
            <div class="mt-12 md:mt-0">
              <h3
                class="text-sm font-semibold text-gray-700 dark:text-gray-200 tracking-wider uppercase"
              >
                {{ $t('legal') }}
              </h3>
              <ul class="mt-4 space-y-4">
                <li>
                  <NuxtLink
                    :href="localePath('/privacy_policy')"
                    class="text-base text-gray-500 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-200 capitalize"
                  >
                    {{ $t('privacy_policy') }}
                  </NuxtLink>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div class="mt-12 border-t border-gray-200 dark:border-gray-600 pt-8">
        <p class="text-base text-gray-400 dark:text-gray-500 xl:text-center">
          &copy; 2016 {{ $t('author') }}
        </p>
      </div>
    </div>
  </footer>
</template>
