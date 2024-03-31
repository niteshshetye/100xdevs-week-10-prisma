import { PrismaClient } from "@prisma/client";

const client = new PrismaClient();

async function deleteTodo(todoId: number) {
  await client.todo.delete({ where: { id: todoId } });
  console.log(`todo with id: ${todoId} is deleted...!`);
}

deleteTodo(1);
