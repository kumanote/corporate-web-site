# About this project

This is our official corporate website application.

Please visit our [homepage](https://kumano-te.com).

# Technical information

This is a real-world example of [Nuxt3](https://nuxt.com/) application with the following features.

- nuxt3(vue3)
- typescript
- tailwindcss
- sass
- eslint
- prettier
- commitlint
- [i18n(internationalization)](https://v8.i18n.nuxtjs.org/)
- [vue-gtag-next](https://matteo-gabriele.gitbook.io/vue-gtag/v/next/)
- [sitemap](https://github.com/funkenstudio/sitemap-module-nuxt-3)

# Docker build & run

```bash
% IMAGE=corporate-web-site:latest
% docker build -t ${IMAGE} .
% docker run --rm -p 3000:3000 ${IMAGE}
```
