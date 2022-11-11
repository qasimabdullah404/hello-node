FROM node:14-alpine3.16
WORKDIR /src
COPY package.json yarn.lock /src/
RUN yarn install
COPY app.js /src
ENV PORT=1111
EXPOSE 1111
CMD ["yarn", "start"]
