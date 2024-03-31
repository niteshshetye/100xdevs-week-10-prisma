import { PrismaClient } from "@prisma/client";
const client = new PrismaClient({ log: ["info", "query", "error"] });

async function getTodosList() {
  const response = await client.todo.findMany({});
  console.log("todo list: ");
  console.log(response);
}

async function getTodo(todoid: number) {
  const response = await client.todo.findUnique({ where: { id: todoid } });
  console.log("todo for id: ", todoid);
  console.log(response);
}

getTodosList();
getTodo(1);
