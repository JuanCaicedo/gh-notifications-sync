FROM node:8.11.1-slim

LABEL name "gh-notifications-sync"

RUN mkdir /app
WORKDIR /app

COPY package.json /app
COPY package-lock.json /app
COPY config /app/config
COPY init.sh /app/init.sh
COPY index.js /app/index.js

RUN npm install

COPY scripts /app/scripts

CMD ["bash", "init.sh" ]
expose 3000
