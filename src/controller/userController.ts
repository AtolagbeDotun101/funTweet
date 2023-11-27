import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();
import { Request, Response } from "express";

// Create User
const createUser = async (req: Request, res: Response) => {
  const { email, username, name, bio } = req.body;
  try {
    const user = await prisma.user.create({
      data: {
        email,
        username,
        name,
        bio,
      },
    });
    res.status(201).json(user);
  } catch (error) {
    res.status(400).json({ error: error });
  }
};

//Get all User
const allUser = async (req: Request, res: Response) => {
  const user = await prisma.user.findMany();
  res.json(user);
};

//get single user
const singleUser = async (req: Request, res: Response) => {
  const { id } = req.params;
  try {
    const user = await prisma.user.findUnique({ where: { id: Number(id) } });
    res.status(200).json(user);
  } catch (error) {
    res.status(400).json(error);
  }
};


const updateUser = async (req: Request, res: Response) => {
  const { id } = req.params;
  const { username, bio, image, name } = req.body;
  try {
    const result = await prisma.user.update({
      where: { id: Number(id) },
      data: { username, bio, name, image },
    });
    res.status(200).json(result);
  } catch (error) {
    res.status(400).json(error);
  }
};

const deleteUser = async (req: Request, res: Response) => {
  const { id } = req.params;
  await prisma.user.delete({ where: { id: Number(id) } });
  res.status(200);
};

module.exports = {
  allUser,
  createUser,
  singleUser,
  updateUser,
  deleteUser,
};
