import prisma from "$lib/server/index.js";
import { json } from "@sveltejs/kit";

export async function GET({params}) {
  try {
    const a = await prisma.yog.findMany({where: {userName: params.userName}});

    return json(a);
  } catch (e) {
    return json(e, { status: 400 });
  }
}
