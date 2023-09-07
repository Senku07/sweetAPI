import prisma from '$lib/server/index.js';
import { json } from '@sveltejs/kit';

export async function DELETE({ request, params }) {
  try {
    const value = params.id;
    await prisma.karma.delete({ where: { id: value } });
    return json("Success");
  } catch (e) {
    return json(e, { status: 400 });
  }
}

export async function PATCH({ params }) {
  try {
    await prisma.karma.update({
      where: {
        id: params.id,
      },
      data: {
        endTime: new Date(),
      },
    });
    return json("success");
  } catch (e) {
    return json(e, { status: 400 });
  }
}
