import { PrismaClient } from "@prisma/client";
const client = new PrismaClient({ log: ["info", "query", "error"] });

export async function insertUser(
  email: string,
  password: string,
  firstname: string,
  lastname: string
) {
  await client.user.create({
    data: {
      email,
      firstname,
      lastname,
      password,
    },
    select: {
      email: true,
      firstname: true,
      id: true,
      lastname: true,
    },
  });

  console.log(`user with ${email} is created successfully...!`);
}

insertUser("niteshshetye1234@gmail.com", "password", "nitesh", "shetye");
