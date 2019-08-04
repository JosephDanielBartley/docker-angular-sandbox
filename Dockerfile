# base image
FROM node:10.16.1 AS builder

# set working directory
WORKDIR /app

COPY . .

RUN npm install
RUN npm run build:prod

FROM nginx:1.17.2

COPY --from=builder /app/dist/* /usr/share/nginx/html/