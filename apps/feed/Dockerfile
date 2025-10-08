FROM node:lts AS builder
WORKDIR /app
COPY package*.json ./
RUN npm ci
COPY . .
RUN npx nx build feed
RUN npx prisma generate --schema=apps/feed/prisma/schema.prisma

FROM node:lts
WORKDIR /app
COPY --from=builder /app/dist/apps/feed ./
COPY --from=builder /app/apps/feed/prisma ./prisma/
COPY --from=builder /app/node_modules ./node_modules
COPY apps/feed/.env .env
ENV PORT=3335
EXPOSE 3335
CMD ["node", "main.js"]
# FROM node:lts AS builder
# WORKDIR /app
# COPY . .
# RUN npm ci
# RUN npx nx build feed
# RUN npx prisma generate --schema=apps/feed/prisma/schema.prisma

# FROM node:lts
# WORKDIR /app
# COPY --from=builder /app/dist/apps/feed ./
# COPY --from=builder /app/apps/feed/prisma ./prisma/
# COPY --from=builder /app/node_modules ./node_modules
# COPY apps/feed/.env .env
# ENV PORT=3335
# EXPOSE 3335
# CMD ["node", "main.js"]