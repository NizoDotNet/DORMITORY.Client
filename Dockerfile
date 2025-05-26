FROM node:18.12.1-alpine as develop-stage
WORKDIR /app
COPY package*.json ./
COPY . .
RUN npm install
RUN npm run build
FROM nginx:alpine as production-build
COPY ./nginx.conf /etc/nginx/nginx.conf
RUN rm -rf /usr/share/nginx/html/*
COPY --from=develop-stage /app/dist /usr/share/nginx/html
EXPOSE 80