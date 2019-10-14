FROM node:12.2.0-alpine

WORKDIR /usr/src/app

RUN npm install

COPY /src /app/src

COPY ["package.json", "package-lock.json*", "./"]

EXPOSE 3000

CMD ["npm", "start"]