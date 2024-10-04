FROM node

WORKDIR /api

COPY package.json package.json
COPY package-lock.json package-lock.json

RUN npm install

COPY email.js email.js

EXPOSE 3000

CMD ["node", "email.js"]