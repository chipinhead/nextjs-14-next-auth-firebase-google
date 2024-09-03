import { getServerSession } from "next-auth/next";
import { authOptions } from "@/app/lib/auth";
import { NextResponse } from "next/server";

export async function GET() {
  const session = await getServerSession(authOptions);

  if (session) {
    return NextResponse.json({ message: `You Are Logged In As: ${session.user?.name}` });
  } else {
    return NextResponse.json({ message: "You Are NOT Logged In" });
  }
}