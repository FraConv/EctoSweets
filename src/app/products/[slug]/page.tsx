import ProductsClient from "@/app/components/ProductsClient";
import { connectDB } from "@/lib/mongodb";
import Prodotti from "@/models/Prodotti";

export default async function CategoriaPage(props: any) {
  await connectDB();

  const params = await props.params;
  const slug = params.slug;

  const prodotti = await Prodotti.find({
    categoria: slug
  });

  if (prodotti.length === 0) {
    return <h1>Categoria non trovata</h1>;
  }

  return <ProductsClient prodotti={JSON.parse(JSON.stringify(prodotti))} slug={slug} />;
}