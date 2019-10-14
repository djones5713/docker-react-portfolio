FROM node:12.2.0-alpine

WORKDIR /react-frontend/src/app

RUN npm install

COPY ["package.json", "package-lock.json*", "./"]

EXPOSE 3000

CMD ["npm", "start"]