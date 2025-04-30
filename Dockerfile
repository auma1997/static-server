FROM node:18-alpine
WORKDIR /usr/src/app

# 1. Install dependencies
COPY package*.json ./
RUN npm install --production

<<<<<<< HEAD
# 2. Copy application code + static files
=======
# 2. Copy application code and the public folder
>>>>>>> 6fe7f37737872dd5a474bf6abbd54bd36da4309e
COPY server.js ./
COPY public/ ./public/

EXPOSE 8080
<<<<<<< HEAD
CMD ["node", "server.js"]
=======
CMD ["node","server.js"]
>>>>>>> 6fe7f37737872dd5a474bf6abbd54bd36da4309e
