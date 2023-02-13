<script setup lang="ts">
  import {
    PuzzlePieceIcon,
    PresentationChartBarIcon,
    CircleStackIcon,
    AcademicCapIcon,
    PlusIcon,
  } from '@heroicons/vue/24/outline'
  import { CheckIcon } from '@heroicons/vue/20/solid'
  import Breadcrumb from '~/components/breadcrumbs/Breadcrumb.vue'
  const appConfig = useAppConfig()
  const localeRoute = useLocaleRoute()
  const { locale, t } = useI18n()
  useHead({ title: t('consultant') })
  const useCases = [
    {
      name: 'ゲーム開発チームのメンター',
      description:
        '大規模な開発チームのメンターをしていました。アクセス数が多く負荷の高い環境を想定したアプリケーションのミドルウェアの選定・検証/課題管理ツール、ソース管理ツール類の導入/分析環境の構築など実装部分の支援も実施させて頂きました。',
      icon: PuzzlePieceIcon,
    },
    {
      name: 'web3開発チームのメンター',
      description:
        '暗号通貨に関係するシステム開発のサポートに止まらず、スマートコントラクトの設計・実装・監査やブロックチェーン自体（レイヤー１と呼ばれています）の開発実績もあります。',
      icon: CircleStackIcon,
    },
    {
      name: 'デジタルマーケティングチームのサポート',
      description:
        'Big Dataを扱うデジタルマーケティングチームのサポート実績があります。RedshiftやHadoop/Prestoなどを使った分析環境の構築などの支援を行いました。',
      icon: PresentationChartBarIcon,
    },
    {
      name: 'その他',
      description:
        'Rust/Kubernetes/NewSQL/Nuxt3/NextJs/SwiftUI/Jetpack Composeなどのモダンな技術を習得していますので、そのような技術の導入を検討されているチームを支援させて頂きます。',
      icon: AcademicCapIcon,
    },
  ]
  const features = [
    'スポットのコーディングや検証作業も対応致します',
    '作業時は都度作業内容の分かるレポートを作成致します',
    '対応時間に応じたご請求',
    'ChatworkやSlackなどを使った質問対応',
    '24時間365日対応（緊急の場合に限ります）',
  ]
  const breadcrumbItems = [
    {
      name: 'service',
      href: localeRoute('/services', locale.value)?.path,
    },
    {
      name: 'consultant',
      href: localeRoute('/services/consultant', locale.value)?.path,
    },
  ]
</script>

<template>
  <div
    class="mx-auto max-w-md px-4 sm:px-6 sm:max-w-3xl lg:px-8 lg:max-w-7xl py-2"
  >
    <Breadcrumb :items="breadcrumbItems" />
  </div>
  <section class="pt-12 pb-16 sm:pb-20 sm:pb-24 lg:pb-28 lg:pb-32">
    <div
      class="mx-auto max-w-md px-4 sm:px-6 sm:max-w-3xl lg:px-8 lg:max-w-7xl"
    >
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
            {{ $t('consultant') }}
          </h2>
          <p
            class="mt-5 mx-auto sm:max-w-3xl text-xl text-gray-500 dark:text-gray-400"
          >
            {{ $t('consultant_description') }}
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
                    {{ $t('consultant_use_case_title') }}
                  </p>
                  <dl class="mt-12 space-y-10">
                    <div
                      v-for="feature in useCases"
                      :key="feature.name"
                      class="relative"
                    >
                      <dt>
                        <div
                          class="absolute flex h-12 w-12 items-center justify-center rounded-md bg-primary-500"
                        >
                          <component
                            :is="feature.icon"
                            class="h-6 w-6 text-white"
                            aria-hidden="true"
                          />
                        </div>
                        <p
                          class="ml-16 text-lg font-medium leading-6 text-gray-900 dark:text-gray-50"
                        >
                          {{ feature.name }}
                        </p>
                      </dt>
                      <dd
                        class="mt-2 ml-16 text-base text-gray-500 dark:text-gray-400"
                      >
                        {{ feature.description }}
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
                      <div class="relative grid grid-cols-2">
                        <div class="flex items-baseline justify-center gap-x-2">
                          <span
                            class="text-2xl font-bold tracking-tight text-white sm:text-3xl lg:text-4xl"
                            >¥50,000</span
                          >
                          <span
                            class="text-sm font-semibold leading-7 text-gray-100 lg:text-base"
                            >/月</span
                          >
                        </div>
                        <span
                          class="pointer-events-none absolute flex h-8 w-full items-center justify-center lg:h-12"
                        >
                          <PlusIcon
                            class="h-4 w-4 text-primary-200 lg:h-6 lg:w-6"
                          />
                        </span>
                        <div class="flex items-baseline justify-center gap-x-2">
                          <span
                            class="text-2xl font-bold tracking-tight text-white sm:text-3xl lg:text-4xl"
                            >¥6,250</span
                          >
                          <span
                            class="text-sm font-semibold leading-7 text-gray-100 lg:text-base"
                            >/時間</span
                          >
                        </div>
                      </div>
                      <span class="mt-2 text-sm font-medium text-primary-100"
                        >※8時間を超える実稼働が発生した場合<br />発生した時間を元に追加で請求させて頂きます。</span
                      >
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
                      {{ feature }}
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
