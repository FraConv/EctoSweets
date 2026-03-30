import { connectDB } from "@/lib/mongodb";
import Prodotti from "@/models/Prodotti";

export default async function CategoriaPage(props: any) {
  await connectDB();

  const params = await props.params; // 👈 QUESTO È IL FIX

  console.log("SLUG:", params.slug);

  const prodotti = await Prodotti.find({
    categoria: params.slug
  });

  if (prodotti.length === 0) {
    return <h1>Categoria non trovata</h1>;
  }

  return (
    <div className="p-10">
      <h1 className="text-3xl font-bold mb-6 flex justify-center">
        {params.slug}
      </h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {prodotti.map((p: any) => (
          <div key={p._id} className="border p-4 rounded-xl shadow-md">
            <h2 className="text-lg font-bold">{p.nome}</h2>
            <p className="text-green-600">{p.prezzo}</p>
          </div>
        ))}
      </div>
    </div>
  );
}