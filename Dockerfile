FROM public.ecr.aws/docker/library/node:22-alpine AS build

WORKDIR /app

COPY package*.json ./
RUN npm ci

COPY . .
RUN npm run build

FROM public.ecr.aws/docker/library/node:22-alpine

COPY --from=public.ecr.aws/awsguru/aws-lambda-adapter:0.8.4 /lambda-adapter /opt/extensions/lambda-adapter

WORKDIR /app

RUN npm install --global serve@14.2.4 && npm cache clean --force

COPY --from=build /app/dist ./dist

ENV PORT=8080
ENV AWS_LWA_PORT=8080

EXPOSE 8080

CMD ["serve", "-s", "dist", "-l", "8080"]