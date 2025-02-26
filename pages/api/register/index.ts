import type { NextApiRequest, NextApiResponse } from "next";
import prisma from "../../../helper/api/db";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  try {
    const {
      name,
      email,
      password,
    }: { name: string; email: string; password: string } =JSON.parse(req.body);
    console.log(name,email);
    const data = await prisma.users.create({
      data: { name, email, password, referral_code: "testing" },
    });

    res.status(200).json(data);
  } catch (error) {
   console.log(error)
  }
}
