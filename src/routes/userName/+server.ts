import prisma from "$lib/server";
import { json } from "@sveltejs/kit";

export async function GET() {
    try {
        const a = await prisma.user.findMany();
        return json(a);
    } catch (error) {
        return json(error,{status:400})
    }
    
}