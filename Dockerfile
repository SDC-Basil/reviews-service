#build from parent image node with version 15.12.0-alpine3.10
FROM node:15.12.0-alpine3.10

EXPOSE 3000

#Do i need an entrypoint

COPY ["package.json", "package-lock.json*", "./"]

RUN npm install

COPY . .

CMD [ "node", "server.js" ]

