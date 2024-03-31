import { PrismaClient } from "@prisma/client";

function prismaClient() {
  const prisma = new PrismaClient();
  return prisma;
}

const client = prismaClient();

async function insertUser(
  email: string,
  password: string,
  firstname: string,
  lastname: string
) {
  const response = await client.user.create({
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

  console.log(`user with ${email} is created successfully...!`, response);
}

// insertUser("niteshshetye@gmail.com", "password", "nitesh", "shetye");

async function updateUser(email: string, firstname: string, lastname: string) {
  const response = await client.user.update({
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

  console.log(`${email} is updated succefully...!`, { response });
}
// updateUser("niteshshetye@gmail.com", "Nitesh Anant", "Shetye");

async function getUserlist() {
  const response = await client.user.findMany();
  console.log("user list: ", { response });
}

getUserlist();
