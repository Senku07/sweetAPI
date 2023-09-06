import prisma from "$lib/server/index.js";
import { json } from "@sveltejs/kit";

export async function DELETE({ params }) {
  try {
    const value = params.id;
    await prisma.karma.deleteMany({where:{yogId: value}});
    await prisma.yog.delete({ where: { id: value } });
    return json("Success");
  } catch (e) {
    return json(e, { status: 400 });
  }
}


