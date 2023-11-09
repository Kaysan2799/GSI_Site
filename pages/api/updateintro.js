import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export default async function handler(req, res) {
  try {
    if (req.method === "POST") {
      const { mainheading, subheading, para, img1, img2 } = req.body;
      const id = 1;

      // const createdintro = await prisma.intro.create({
      //   data: {
      //     id,
      //     mainheading,
      //     subheading,
      //     para,
      //     img1,
      //     img2,
      //   },
      // });
      const updatedintro = await prisma.intro.update({
        where: { id: id },
        data: {
          id: id,
          mainheading: mainheading,
          subheading: subheading,
          para: para,
          img1: img1,
          img2: img2,
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
