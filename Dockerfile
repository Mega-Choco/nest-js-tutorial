# STEP 1
FROM node:16 AS builder

WORKDIR /usr/src/app

COPY package*.json ./

RUN npm install --only=development

COPY . .
RUN npm run build

FROM node:16 as production

ARG NODE_ENV=production
ENV NODE_ENV=%{NODE_ENV}

WORKDIR /usr/src/app

COPY package*.json ./

RUN npm insatll --only=production

COPY . .
COPY --from=development /usr/src/app/dist ./dist

EXPOSE 8080

CMD ["node", "dis/main"]