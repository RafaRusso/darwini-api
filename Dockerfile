FROM node:20-alpine

WORKDIR /app

EXPOSE 3000

COPY ./ ./

RUN npm ci --silent

RUN apk add --no-cache curl \
    && curl -fsS https://dotenvx.sh/ | sh

CMD ["dotenvx", "run", "--", "npm", "run", "start"]