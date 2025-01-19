# Base Image
FROM node:18 AS base
WORKDIR /app

# Install dependencies
COPY package*.json ./
RUN npm install

# Copy necessary files
COPY tsconfig*.json vite.config.ts ./
COPY index.html index.css ./
COPY ./src ./src

# Frontend: Development Stage
FROM base AS frontend-dev
WORKDIR /app
EXPOSE 3000
CMD ["npm", "run", "dev"]

# Backend: Development Stage
FROM base AS backend-dev
WORKDIR /app
RUN npm install ts-node typescript --save-dev
COPY . .
EXPOSE 5000
CMD ["npx", "ts-node", "--esm", "src/backend/server.ts"]

# Frontend: Production Stage
FROM base AS frontend-prod
WORKDIR /app
COPY index.html index.css ./
COPY ./src ./src
RUN npm run build
EXPOSE 3000
CMD ["npm", "run", "preview"]

# Backend: Production Stage
FROM base AS backend-prod
WORKDIR /app

# Install production dependencies
COPY package*.json ./
RUN npm install --only=production
RUN npm install ts-node

# Use ts-node to directly run TypeScript files
COPY tsconfig*.json ./
COPY ./src ./src
EXPOSE 5000
CMD ["npx", "ts-node", "--esm", "src/backend/server.ts"]
