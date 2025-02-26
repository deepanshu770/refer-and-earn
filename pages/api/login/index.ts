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
    }: { name: string; email: string; password: string } = req.body;
    const data = await prisma.users.create({
      data: { name, email, password, referral_code: "testing" },
    });

    res.status(200).json(data);
  } catch (error) {
    if (error.type === "CredentialsSignin") {
      res.status(401).json({ error: "Invalid credentials." });
    } else {
      res.status(500).json({ error: "Something went wrong." });
    }
  }
}
