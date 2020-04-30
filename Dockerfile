FROM node:12

WORKDIR /usr/src/app

COPY package*.json ./

RUN npm install

COPY .env.production ./
COPY dist ./

RUN cp .env.production .env

EXPOSE 3000

CMD [ "node", "/dist/server.js" ]