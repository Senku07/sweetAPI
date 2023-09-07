import prisma from "$lib/server/index.js";
import { json } from "@sveltejs/kit";

export async function DELETE({ params }) {
  try {
    const value = params.id;
    await prisma.todo.delete({ where: { id: value } });
    return json("Success");
  } catch (e) {
    return json(e, { status: 400 });
  }
}

export async function PATCH({ params }) {
  try {
    await prisma.todo.update({
      where: { id: params.id },
      data: {
        isDone: true,
        doneAt: new Date(),
      },
    });
    return json("success");
  } catch (e) {
    return json(e,{status: 400});
  }
}
