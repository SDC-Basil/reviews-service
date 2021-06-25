#build from parent image node with version 15.12.0-alpine3.10
FROM node:14-stretch AS builder

WORKDIR /app

COPY . .

RUN npm ci

FROM node:14-alpine

USER node

COPY --from=builder --chown=node:node /app .

CMD [ "node", "server.js" ]

