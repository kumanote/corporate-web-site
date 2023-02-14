<template>
  <div class="bg-white dark:bg-gray-900">
    <div class="container py-12 sm:py-16">
      <div
        class="relative isolate overflow-hidden bg-gray-900 px-6 pt-16 rounded-lg shadow-xl sm:px-16 md:pt-24 lg:flex lg:gap-x-20 lg:px-24 lg:pt-0"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1024 1024"
          class="absolute top-1/2 left-1/2 -z-10 h-[64rem] w-[64rem] -translate-y-1/2 [mask-image:radial-gradient(closest-side,white,transparent)] sm:left-full sm:-ml-80 lg:left-1/2 lg:ml-0 lg:translate-y-0 lg:-translate-x-1/2"
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
        <div
          class="mx-auto max-w-md text-center lg:mx-0 lg:flex-auto lg:py-32 lg:text-left"
        >
          <h2
            class="text-3xl font-bold tracking-tight text-white sm:text-4xl uppercase"
          >
            Kumanote Help Desk
          </h2>
          <p class="mt-6 text-lg leading-8 text-gray-300">
            {{ $t('help_desk_description') }}
          </p>
          <div
            class="mt-10 flex items-center justify-center gap-x-6 lg:justify-start"
          >
            <a
              target="_blank"
              href="https://github.com/kumanote/help-desk-server"
              class="text-base font-semibold leading-7 text-white"
              >Learn more <span>→</span></a
            >
          </div>
        </div>
        <div class="relative mt-16 h-80 lg:mt-8">
          <img
            class="absolute top-0 left-0 w-[57rem] max-w-none rounded-md bg-white/5 ring-1 ring-white/10"
            src="/images/kumanote-help-desk.png"
            alt="kumanote open help desk"
            width="912"
            height="541"
          />
        </div>
      </div>
    </div>
  </div>
</template>
