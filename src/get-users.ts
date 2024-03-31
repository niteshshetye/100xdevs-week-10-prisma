import { PrismaClient } from "@prisma/client";
const client = new PrismaClient({ log: ["info", "query", "error"] });

async function getUserlist() {
  const response = await client.user.findMany({});
  console.log("user list: ");
  console.log(response);
}

async function getUserlistWithTodos() {
  const response = await client.user.findMany({
    include: {
      todo: true,
    },
  });
  console.log("user list with todos: ");
  console.log(response);
}

async function getUserWithTodos(userid: number) {
  const response = await client.user.findMany({
    where: {
      id: userid,
    },
    include: {
      todo: true,
    },
  });
  console.log("user with todos: ", userid);
  console.log(response);
}

getUserlist();
getUserlistWithTodos();
getUserWithTodos(1);
