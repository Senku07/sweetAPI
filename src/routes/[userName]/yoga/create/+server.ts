import prisma from "$lib/server/index.js";
import { json } from "@sveltejs/kit";
import { z } from "zod";

const Schema = z.object({
  name: z.string().nonempty().trim().max(255),
});

export async function POST({ request,params}) {
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
    const todo = await prisma.yog.create({
      data: {
        name: res.data.name,
        userName: params.userName
      },
    });
    console.log(todo);

    return json(todo);
  } catch (e) {
    return json(e, { status: 400 });
  }
}
