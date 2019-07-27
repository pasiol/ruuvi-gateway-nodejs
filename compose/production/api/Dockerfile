FROM node:10.16-buster-slim
RUN mkdir /usr/src/app
WORKDIR /usr/src/app
COPY package*.json ./
RUN npm ci --only=production

COPY . .

EXPOSE 8080
CMD [ "node", "index.js" ]