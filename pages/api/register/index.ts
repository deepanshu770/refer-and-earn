import type { NextApiRequest, NextApiResponse } from "next";
import prisma from "../../../helper/api/db";
import bcrypt from "bcryptjs";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  try {
    let {
      name,
      email,
      password,
      referral_code,
    }: {
      name: string;
      email: string;
      password: string;
      referral_code: string;
    } = JSON.parse(req.body);
    password = bcrypt.hashSync(password, 11);;
    referral_code = password.split(".")[1];
    const data = await prisma.users.create({
      data: { name, email, password, referral_code },
    });

   
    res.status(200).json(data);
    
  } catch (error) {
    console.log(error);
  }
}
