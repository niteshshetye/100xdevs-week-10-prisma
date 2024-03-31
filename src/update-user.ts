import { PrismaClient } from "@prisma/client";
const client = new PrismaClient({ log: ["info", "query", "error"] });

async function updateUser(email: string, firstname: string, lastname: string) {
  await client.user.update({
    where: { email },
    data: {
      firstname,
      lastname,
    },
    select: {
      email: true,
      firstname: true,
      lastname: true,
      id: true,
    },
  });

  console.log(`${email} is updated succefully...!`);
}

updateUser("niteshshetye1234@gmail.com", "Nitesh Anant", "Shetye");
