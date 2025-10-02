FROM node:20-slim

WORKDIR /app

# OpenSSL installieren (Debian bringt 1.1 mit)
RUN apt-get update && apt-get install -y openssl && rm -rf /var/lib/apt/lists/*

COPY package*.json ./
RUN npm install --omit=dev

COPY dist/apps/feed ./dist/apps/feed
COPY apps/feed/prisma ./apps/feed/prisma

RUN npx prisma generate --schema=apps/feed/prisma/schema.prisma

WORKDIR /app/dist/apps/feed

EXPOSE 3000

CMD ["node", "main.js"]