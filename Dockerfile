# 1. Base image
FROM node:18-alpine

# 2. Create app directory
WORKDIR /usr/src/app

# 3. Install dependencies
COPY package.json package-lock.json* ./
RUN npm install --production

# 4. Bundle app source
COPY server.js public/ ./

# 5. Expose port
EXPOSE 8080

# 6. Start the server
CMD [ "node", "server.js" ]
