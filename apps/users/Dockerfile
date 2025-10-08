FROM node:lts AS builder
WORKDIR /app
COPY package*.json ./
RUN npm ci
COPY . .
RUN npx nx build users
RUN npx prisma generate --schema=apps/users/prisma/schema.prisma

FROM node:lts
WORKDIR /app
COPY --from=builder /app/dist/apps/users ./
COPY --from=builder /app/apps/users/prisma ./prisma/
COPY --from=builder /app/node_modules ./node_modules
COPY apps/users/.env .env
ENV PORT=3333
EXPOSE 3333
CMD ["node", "main.js"]

# FROM node:lts AS builder
# WORKDIR /app
# COPY package*.json ./
# RUN npm ci
# COPY . .
# RUN npx nx build users
# RUN npx prisma generate --schema=apps/users/prisma/schema.prisma

# FROM node:lts
# WORKDIR /app
# COPY --from=builder /app/dist/apps/users ./
# COPY --from=builder /app/apps/users/prisma ./prisma/
# COPY --from=builder /app/node_modules ./node_modules
# COPY apps/users/.env .env
# ENV PORT=3333
# EXPOSE 3333
# CMD ["node", "main.js"]