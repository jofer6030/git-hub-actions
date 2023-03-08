FROM node:16.19.1-alpine3.16

ENV PORT 8000

WORKDIR /app

COPY . .

RUN npm install

CMD [ "npm","start" ]