# Development Stage
FROM node:18 AS development
WORKDIR /app
COPY ../../package.json ../../package-lock.json ./
RUN npm install
COPY . .
EXPOSE 3000
CMD ["npm", "run", "dev"]

# Production Stage
FROM node:20 AS production
WORKDIR /app
COPY ../../package.json ../../package-lock.json ./
RUN npm install --only=production
COPY . .
EXPOSE 3000
CMD ["node", "server.mts"]
