import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export default async function handler(req, res) {
  if (req.method === "POST") {
    const { username, password } = req.body;
    try {
      // const user = await prisma.username.create({
      //   data: {
      //     username,
      //     password,
      //   },
      // });
      const user = await prisma.username.findFirst({
        where: {
          username: username,
          password: password,
        },
      });

      if (user.username === username && user.password === password) {
        console.log(user.username + " " + user.password);
      }
      res.status(201).json({ forward: "true" });
    } catch (error) {
      res.status(500).json({ error: error.message });
    } finally {
      await prisma.$disconnect();
    }
  } else if (req.method === "GET") {
    try {
      const data = await prisma.user.findMany(); // Replace 'yourModelName' with the actual name of your Prisma model
      res.status(200).json(data);
    } catch (error) {
      console.error("Error retrieving data:", error);
      res.status(500).json({ error: "Error retrieving data" });
    }
  } else {
    res.status(405).json({ error: "Method not allowed" });
  }
}
