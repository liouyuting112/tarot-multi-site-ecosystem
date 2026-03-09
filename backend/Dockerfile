FROM node:20-alpine
# Installing libvips-dev for sharp Compatibility
RUN apk update && apk add --no-cache build-base gcc autoconf automake zlib-dev libpng-dev nasm util-linux-dev libtool make vips-dev

WORKDIR /opt/
COPY package.json package-lock.json ./
RUN npm install

WORKDIR /opt/app
COPY . .
RUN npm run build

# Ensure the data directory exists for the persistent volume
RUN mkdir -p /data

EXPOSE 1337
CMD ["npm", "run", "start"]
