FROM node:16.14.2-stretch-slim

WORKDIR /home/node/app

COPY package.json ./
COPY package-lock.json ./

RUN npm ci \
  && npm run build

COPY . .

CMD ["npm", "run", "start"]