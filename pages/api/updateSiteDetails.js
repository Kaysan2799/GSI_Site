import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export default async function handler(req, res) {
  try {
    if (req.method === "POST") {
      const { img1, img2, img3, site, webtext } = req.body;

      //   const createdWebText = await prisma.sitedetails.create({
      //     data: {
      //       id,
      //       webtext,
      //       site,
      //       img1,
      //       img2,
      //       img3,
      //     },
      //   });
      const createdWebText = await prisma.sitedetails.update({
        where: { site: site },
        data: {
          webtext: webtext,
          site: site,
          img1: img1,
          img2: img2,
          img3: img3,
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
