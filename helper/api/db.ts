import { PrismaClient } from "@prisma/client";
import bcrypt from "bcryptjs";

const prisma = new PrismaClient().$extends({
  query: {
    users: {
      $allOperations({ args, model, operation, query }) {
        if (operation === "create") {
          bcrypt.hash(args.data.password, 11, (err, res) => {
            console.log(err, res);
            args.data.password = res;
            args.data.referral_code = res.split(".")[1];
          });
        }
        return query(args);
      },
    },
  },
});

export default prisma;
