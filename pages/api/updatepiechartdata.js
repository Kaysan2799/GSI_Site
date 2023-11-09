import { PrismaClient } from "@/prisma/client";

const prisma = new PrismaClient();

export default async function handler(req, res) {
  if (req.method === "GET") {
    try {
      const data = await prisma.piechart.findMany(); // Replace 'yourModelName' with the actual name of your Prisma model
      res.status(200).json(data);

      const {  site, greenarea, treecanopy, barrenland, wetland } = req.body;

      const createdpiechart = await prisma.piechart.create({
        data: {
          site,
          greenarea,
          treecanopy,
          barrenland,
          wetland,
        },
      });
      res.status(201).json({ forward: true });
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: error.message });
    } finally {
      await prisma.$disconnect();
    }
  } else {
    res.status(405).json({ error: error.message });
  }
}