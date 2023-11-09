import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export default async function handler(req, res) {
  try {
    if (req.method === "POST") {
      const { name, email, address, country, phonenumber, donation } = req.body;

      const createdintro = await prisma.clientinformation.create({
        data: {
          name,
          email,
          address,
          country,
          phonenumber,
          donation,
        },
      });

      res.status(201).json({ forward: true });
    } else {
      res.status(405).json({ error: "Method not allowed" });
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  } finally {
    await prisma.$disconnect();
  }
}
