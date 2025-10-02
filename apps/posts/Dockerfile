FROM node:20-slim

WORKDIR /app

RUN apt-get update && apt-get install -y openssl && rm -rf /var/lib/apt/lists/*

COPY package*.json ./
RUN npm install --omit=dev

COPY dist/apps/posts ./dist/apps/posts
COPY apps/posts/prisma ./apps/posts/prisma

RUN npx prisma generate --schema=apps/posts/prisma/schema.prisma

WORKDIR /app/dist/apps/posts

EXPOSE 3002

CMD ["node", "main.js"]