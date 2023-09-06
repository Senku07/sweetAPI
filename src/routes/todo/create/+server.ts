import prisma from "$lib/server/index.js";
import { json } from "@sveltejs/kit";
import { z } from "zod";

const Schema = z.object({
  value: z.string().nonempty().trim().max(255),
});

export async function POST({ request }) {
  const res = Schema.safeParse(await request.json());

  if (!res.success) {
    return json(
      {
        type: "Validation",
        error: res.error.flatten(),
      },
      { status: 400 }
    );
  }

  try {
    const todo = await prisma.todo.create({
      data: {
        value: res.data.value,
      },
    });
    console.log(todo);

    return json(todo);
  } catch (e) {
    return json(e, { status: 400 });
  }
}
