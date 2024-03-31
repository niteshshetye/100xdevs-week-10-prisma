import { PrismaClient } from "@prisma/client";

function generateClient() {
  const prisma = new PrismaClient({ log: ["info", "query", "error"] });
  return prisma;
}

const client = generateClient();

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

async function getUserlist() {
  const response = await client.user.findMany();
  console.log("user list: ", { response });
}

async function main() {
  await insertUser(
    "niteshshetye1234@gmail.com",
    "password",
    "nitesh",
    "shetye"
  );

  await updateUser("niteshshetye1234@gmail.com", "Nitesh Anant", "Shetye");
  await getUserlist();
}

main();
