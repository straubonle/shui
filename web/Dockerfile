FROM node:16

WORKDIR /opt/web
RUN chown -R node:node .

USER node

COPY *.json ./

RUN npm install

COPY --chown=node:node . .

RUN npm run build

ARG NODE_ENV=production
ENV NODE_ENV $NODE_ENV

ENV PORT=8080 \
    PATH="/opt/web/node_modules/.bin:${PATH}"

EXPOSE 8080


CMD [ "npm", "run", "serve" ]
