# Base on offical Node.js Alpine image
FROM node:alpine

# ITS
RUN apk add curl unzip

# Set working directory
WORKDIR /usr/app

# COPY package.json ./
COPY package.json package-lock.json ./
ENV NODE_OPTIONS=--openssl-legacy-provider

COPY . .
RUN npm install

# Build app
RUN npm run build 

EXPOSE 3000

# Run container as non-root (unprivileged) user
# The node user is provided in the Node.js Alpine base image
#USER node

# Run npm start script when container starts
# CMD [ "npm", "start" ]
ENTRYPOINT ["/bin/sh", "run.sh"]