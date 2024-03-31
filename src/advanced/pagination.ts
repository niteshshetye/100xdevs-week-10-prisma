import { PrismaClient } from "@prisma/client";

const client = new PrismaClient();

async function getUsersList(limit: number, offset: number) {
  const response = await client.user.findMany({
    skip: offset, // offset
    take: limit, // limit
  });

  console.log(`Users list with pagination: `);
  console.log(response);
}

getUsersList(2, 0);
