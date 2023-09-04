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
RUN npm install -g serve
COPY --from=build /app/build ./build

CMD ["serve", "-s", "build", "-l", "5173"]