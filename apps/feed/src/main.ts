import { PrismaClient } from '@prisma/client';
import express from 'express';
import cors from 'cors';

const prisma = new PrismaClient();
const port = process.env.PORT ? Number(process.env.PORT) : 3000;
const host = 'localhost';


const app = express();
app.use(cors({
  origin: 'http://localhost:4200',
  credentials: true
}));

app.get('/', async (req, res) => {
  const posts = await prisma.post.findMany({
    take: 10,
    orderBy: { createdAt: 'desc' },
  });

  res.json(posts);
});

app.listen(port, () => {
  console.log(`[ ready ] http://${host}:${port}`);
});
