import asyncHandler from 'express-async-handler';
import { prisma } from '../config/prismaConfig';

export const createUser = asyncHandler(async, (req, res) => {
  console.log('creating a user');

  const { email } = req.body;

  console.log(email);
});
