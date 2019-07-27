FROM node:10.16-buster-slim
RUN mkdir /usr/src/app
WORKDIR /usr/src/app

COPY package*.json ./
RUN npm ci --only=production

COPY . .

RUN mkdir /etc/certs

ENTRYPOINT [ "node", "index.js" ]