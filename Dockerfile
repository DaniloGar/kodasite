# Etapa 1: Build do projeto
FROM node:18-alpine AS builder
WORKDIR /app
COPY package*.json ./
COPY bun.lockb bun.lockb
COPY . .
RUN npm install && npm run build

# Etapa 2: Servir arquivos estáticos com nginx
FROM nginx:stable-alpine as production
COPY --from=builder /app/dist /usr/share/nginx/html
COPY ./nginx.conf /etc/nginx/conf.d/default.conf
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
