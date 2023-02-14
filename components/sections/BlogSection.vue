<script setup lang="ts">
  import { Activity } from '~/api/schema/blog/activity'
  import BlogCard from '~/components/cards/BlogCard.vue'
  interface Props {
    activities: Array<Activity>
  }
  defineProps<Props>()
</script>

<template>
  <section class="relative bg-gray-50 dark:bg-gray-800 py-16 sm:py-24 lg:py-32">
    <div class="relative">
      <div class="text-center container">
        <h2
          class="text-base font-semibold tracking-wider text-primary-600 uppercase"
        >
          {{ $t('blog') }}
        </h2>
        <p
          class="mt-2 text-3xl font-extrabold text-gray-900 dark:text-gray-50 tracking-tight sm:text-4xl"
        >
          Kumanote Tech Blog
        </p>
        <p
          class="mt-5 mx-auto max-w-prose text-xl text-gray-500 dark:text-gray-400"
        >
          <TextsTextContainer :text="$t('blog_description')" />
        </p>
      </div>
      <div
        v-if="activities.length > 0"
        class="mt-12 container grid gap-8 lg:grid-cols-3"
      >
        <BlogCard
          v-for="(item, index) in activities"
          :key="index"
          :activity="item"
        ></BlogCard>
      </div>
    </div>
  </section>
</template>
