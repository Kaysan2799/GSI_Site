import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export default async function handler(req, res) {
  try {
    if (req.method === "GET") {
      const donateData = await prisma.donatecom1.findFirst();
      res.status(200).json(donateData);
    } else if (req.method === "POST") {
      const { img1, img2, img3, mainheading, para } = req.body;
      const id = 1;

        // const createdintro = await prisma.donatecom1.create({
        //   data: {
        //     id,
        //     img1,
        //     img2,
        //     img3,
        //     mainheading,
        //     para,
        //   },
        // });
      const updatedintro = await prisma.donatecom1.update({
        where: { id: id },
        data: {
          id: id,
          img1: img1,
          img2: img2,
          img3: img3,
          mainheading: mainheading,
          para: para,
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
