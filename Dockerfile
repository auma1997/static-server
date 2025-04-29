FROM node:18-alpine
WORKDIR /usr/src/app

# 1. Install dependencies
COPY package*.json ./
RUN npm install --production

# 2. Copy application code and the public folder
COPY server.js ./
COPY public/ ./public/

EXPOSE 8080
CMD ["node","server.js"]
