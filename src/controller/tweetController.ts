const {prismaClient} = require("@prisma/client");
const prisma = new prismaClient();
import { Request, Response } from "express";

const createTweet = async (req: Request, res: Response) => {
  const { content, image } = req.body;
  try {
    const tweet = await prisma.tweet.create({
      data: { content, image },
    });
    res.status(200).json(tweet);
  } catch (error) {
    res.status(400).json({ error: error });
  }
};
