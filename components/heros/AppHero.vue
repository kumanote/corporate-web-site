<template>
  <section id="hero" class="min-h-screen bg-gray-900 overflow-hidden">
    <div class="min-h-screen grid place-content-center">
      <h1 class="text-center font-extrabold tracking-tight md:hidden">
        <span class="block text-white text-3xl sm:text-4xl lg:text-5xl"
          >Welcome to</span
        >
        <span class="block text-white text-5xl sm:text-7xl lg:text-8xl"
          >KUMANOTE</span
        >
      </h1>
    </div>
  </section>
</template>

<style scoped lang="css">
  #hero {
    background: url(/images/top.png) no-repeat center center fixed;
    -webkit-background-size: cover;
    -moz-background-size: cover;
    -o-background-size: cover;
    background-size: cover;
  }
  @media (max-width: 768px) {
    #hero {
      background: url(/images/top-sp.png) no-repeat right center;
      background-size: cover;
    }
  }
</style>
