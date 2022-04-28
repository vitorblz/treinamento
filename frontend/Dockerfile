FROM node:16.14.2-stretch-slim

WORKDIR /usr/scr/app

COPY package.json ./
COPY package-lock.json ./

RUN npm install

COPY . .

CMD ["npm","run","start"]


