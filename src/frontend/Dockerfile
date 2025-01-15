# Development Stage
FROM node:18 AS development
WORKDIR /app
COPY ../../package.json ../../package-lock.json ./
RUN npm install
COPY . .
CMD ["npm", "run", "dev"]

# Build Stage
FROM node:20 AS build
WORKDIR /app
COPY ../../package.json ../../package-lock.json ./
RUN npm install
COPY . .
RUN npm run build

# Production Stage
FROM node:20 AS production
WORKDIR /app
COPY ../../package.json ../../package-lock.json ./
RUN npm install --omit=dev
RUN npm install rollup --legacy-peer-deps
COPY . .
RUN npm rebuild rollup --build-from-source
RUN npm run build
FROM nginx:stable-alpine
COPY --from=production /app/dist /usr/share/nginx/html
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
