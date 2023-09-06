import prisma from "$lib/server/index.js";
import { json } from "@sveltejs/kit";
import { expoOut } from "svelte/easing";

export async function POST({ params }) {
  try {
    const data = await prisma.karma.create({
      data: {
        yog: {
          connect: {
            id: params.id,
          },
        },
      },
      include: {
        yog: true,
      },
    });

    return json("Success");
  } catch (error) {
    return json(error, { status: 400 });
  }
}

export async function GET({ params }) {
  try {
    const a = await prisma.karma.findMany({
      where: {
        yogId: params.id,
      },
      orderBy: {
        startTime: "desc",
      },
    });
    return json(a);
  } catch (e) {
    return json(e, { status: 400 });
  }
}
