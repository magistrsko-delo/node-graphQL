FROM node:12

WORKDIR /app

COPY . .

RUN npm install --only=production
RUN npm run build
COPY .env.production .

RUN cp .env.production .env

EXPOSE 3000

CMD [ "npm", "run", "start:dev" ]