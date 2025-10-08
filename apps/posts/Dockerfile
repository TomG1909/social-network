FROM node:lts AS builder
WORKDIR /app
COPY package*.json ./
RUN npm ci
COPY . .
RUN npx nx build posts
RUN npx prisma generate --schema=apps/posts/prisma/schema.prisma

FROM node:lts
WORKDIR /app
COPY --from=builder /app/dist/apps/posts ./
COPY --from=builder /app/apps/posts/prisma ./prisma/
COPY --from=builder /app/node_modules ./node_modules
COPY apps/posts/.env .env
ENV PORT=3334
EXPOSE 3334
CMD ["node", "main.js"]
# FROM node:lts AS builder
# WORKDIR /app
# COPY . .
# RUN npm ci
# RUN npx nx build posts
# RUN npx prisma generate --schema=apps/posts/prisma/schema.prisma

# FROM node:lts
# WORKDIR /app
# COPY --from=builder /app/dist/apps/posts ./
# COPY --from=builder /app/apps/posts/prisma ./prisma/
# COPY --from=builder /app/node_modules ./node_modules
# COPY apps/posts/.env .env
# ENV PORT=3334
# EXPOSE 3334
# CMD ["node", "main.js"]