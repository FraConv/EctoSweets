import { connectDB } from "@/lib/mongodb";
import Categoria from "@/models/Categoria";

export async function GET() {
  await connectDB();
  const categorie = await Categoria.find();

  return Response.json(categorie);
}