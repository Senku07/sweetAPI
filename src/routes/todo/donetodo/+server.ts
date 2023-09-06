import prisma from "$lib/server/index.js";
import { json } from "@sveltejs/kit";


export async function GET() {
 try {
    const todos = await prisma.todo.findMany({orderBy: { createdAt: "asc"},where:{isDone: true} });
    return json(todos);
  } 
  catch (e) {
    return json(e,{status: 400});
  }
}

