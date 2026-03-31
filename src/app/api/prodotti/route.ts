// /app/api/prodotti/route.ts
import { connectDB } from "@/lib/mongodb";
import Prodotti from "@/models/Prodotti";
import { NextResponse } from "next/server";

export async function GET(req: Request) {
  await connectDB();

  const { searchParams } = new URL(req.url);
  const categoria = searchParams.get("categoria");

  const prodotti = await Prodotti.find({ categoria });

  return NextResponse.json(prodotti);
}