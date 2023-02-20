FROM node:19.6.0-buster-slim

WORKDIR /corporate-web-site
COPY ./package.json /corporate-web-site/
COPY ./yarn.lock /corporate-web-site/
RUN yarn install

COPY . .
RUN yarn build

EXPOSE 3000
CMD ["yarn", "run", "nuxt", "start"]
