FROM node:15.3.0-alpine as build

WORKDIR /app

COPY package*.json ./
COPY yarn.lock ./

RUN yarn install

COPY . ./

RUN yarn build

FROM nginx:stable-alpine
COPY --from=build /app/dist /usr/share/nginx/html
COPY nginx.conf /etc/nginx/conf.d/default.conf

EXPOSE 80
