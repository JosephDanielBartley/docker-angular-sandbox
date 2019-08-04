# base image
FROM node:10.16.1 AS builder

# set working directory
WORKDIR /app

COPY . .

RUN npm install && \
    npm run build:ssr

FROM nginx:1.17.2

COPY --from=builder /app/dist/* /usr/share/nginx/html/