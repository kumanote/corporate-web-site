# About this project

This is our official corporate website application.

Please visit our [homepage](https://kumano-te.com).

# Technical information

- [Astro](https://astro.build/) + [React](https://react.dev/)
- TypeScript
- Tailwind CSS
- Biome (linter / formatter)
- commitlint

# Docker build & run

```bash
% IMAGE=corporate-web-site:latest
% docker build -t ${IMAGE} --build-arg PUBLIC_GA_ID=G-H7YVNLMHSR .
% docker run --rm -p 8080:80 ${IMAGE}
```

**archive**

```bash
# after build docker image, you can archive built artifacts by the following command.
% docker run --rm -v `pwd`/.build:/tmp/.build ${IMAGE} tar czf /tmp/.build/corporate-web-site.tar.gz -C /usr/share/nginx html
```
