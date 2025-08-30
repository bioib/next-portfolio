import { NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export async function GET() {
  const data = await prisma.post.findMany({
    include: { likes: true, comments: true },
  });

  return NextResponse.json({ data }, { status: 200 });
}
