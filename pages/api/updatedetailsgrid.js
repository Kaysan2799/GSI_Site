import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export default async function handler(req, res) {
  try {
    if (req.method === "POST") {
      const {
        site,
        distric,
        area,
        lat,
        lng,
        noofplant,
        carbonsequestration,
        airquality,
        soilprotection,
        economicbenefits,
      } = req.body;

      // const createdmapdis = await prisma.mapdis.create({
      //   data: {
      //     site,
      //     distric,
      //     area,
      //     lat,
      //     lng,
      //     noofplant,
      //     carbonsequestration,
      //     airquality,
      //     soilprotection,
      //     economicbenefits,
      //   },
      // });
      const updatedintro = await prisma.mapdis.update({
        where: { site: site },
        data: {
          site,
          distric,
          area,
          lat,
          lng,
          noofplant,
          carbonsequestration,
          airquality,
          soilprotection,
          economicbenefits,
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
