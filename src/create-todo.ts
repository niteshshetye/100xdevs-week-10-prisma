import { PrismaClient } from "@prisma/client";
const client = new PrismaClient({ log: ["info", "query", "error"] });

async function createTodo(title: string, description: string, userid: number) {
  const response = await client.todo.create({
    data: {
      title,
      done: false,
      description,
      user_id: userid,
    },
  });

  console.log("todo created: ");
  console.log(response);
}

createTodo("Title of todo", "description of todo", 1);
