FROM node:12
RUN apt-get update && apt-get install -y build-essential && apt-get install -y python

WORKDIR /usr/src/app

COPY package*.json ./
COPY . .

RUN npm install --only=production
COPY .env.production .

RUN cp .env.production .env

EXPOSE 3000

CMD [ "npm", "start" ]