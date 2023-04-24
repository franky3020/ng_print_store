FROM node:16.20.0-bullseye as builder
WORKDIR /app
COPY ./package.json ./package-lock.json ./
RUN npm ci
COPY . .
RUN npm run build


FROM nginx:alpine
COPY ./nginx.conf /etc/nginx/conf.d/default.conf
COPY --from=builder /app/dist/ng_print_store /usr/share/nginx/html
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]