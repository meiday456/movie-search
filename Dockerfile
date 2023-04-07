FROM node:18.14.2-alpine3.17

WORKDIR /usr/src/app

COPY package.json ./

RUN npm install

COPY tsconfig.json ./
COPY src ./src
COPY public ./public
COPY .storybook ./storybook

CMD ["npm", "run","start"]


