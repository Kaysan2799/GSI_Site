import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export default async function handler(req, res) {
  if (req.method === "GET") {
    try {
      const data = await prisma.clientinformation.findMany(); // Replace 'yourModelName' with the actual name of your Prisma model
      res.status(200).json(data);
    } catch (error) {
      res.status(500).json({ error: error.message });
    } finally {
      await prisma.$disconnect();
    }
  } else {
    res.status(405).json({ error: "Method not allowed" });
  }
}
