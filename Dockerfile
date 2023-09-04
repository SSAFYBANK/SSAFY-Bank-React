# 빌드 스테이지
FROM node:lts AS build
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
RUN npm run build

# 실행 스테이지
FROM node:lts
WORKDIR /app
COPY --from=build /app/build ./build
COPY package*.json ./
COPY server.js .
RUN npm install express

ENV PORT=5173
EXPOSE 5173

CMD ["node", "server.js"]