#build from parent image node with version 15.12.0-alpine3.10
FROM node:14-stretch AS builder

EXPOSE 3000

WORKDIR /app

COPY ["package.json", "package-lock.json*", "./"]

RUN npm ci

FROM node:14-alpine

USER node

COPY --from=builder --chown=node:node /app .

CMD [ "node", "server.js" ]

