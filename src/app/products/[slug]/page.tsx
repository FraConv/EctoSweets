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

  const ectoplasma = [
    {id: "1", position: "left-8", height: "h-10", width: "w-8"},
    {id: "2", position: "left-16", height: "h-25", width: "w-8"},
    {id: "3", position: "left-24", height: "h-20", width: "w-8"},
    {id: "4", position: "left-50", height: "h-15", width: "w-8"},
    {id: "5", position: "left-42", height: "h-20", width: "w-8"},
    {id: "6", position: "left-58", height: "h-29", width: "w-8"},
  ]



  return (
    <div className="p-10 mb-64">
      <h1 className="text-3xl font-bold mb-6 flex justify-center">
        {params.slug}
      </h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-64">
        {prodotti.map((p: any) => (
          <div key={p._id} className="border p-4 rounded-xl shadow-md bg bg-[#00FF9C] relative text-black flex flex-col ">
            <div className="flex justify-baseline">
              <p className="">{p.prezzo}</p>
            </div>
            <div className="h-32 w-full overflow-hidden">
              <img 
                className="object-contain w-full h-full"
                src={p.immagine} 
                alt={p.nome} 
              />
            </div>
            <div className="flex justify-center mt-3">
              <h2 className="">{p.nome}</h2>
            </div>
            <div className="flex justify-baseline mt-80 absolute font-bold text-white">
              <p className="">Ingredienti:</p>
            </div>
            <div className="flex justify-baseline mt-[21.5rem] font-medium absolute text-white">
              <p>{p.descrizione}</p>
            </div>
            <div>
              {ectoplasma.map((ecto) =>(
                <div 
                  key={ecto.id}
                  className={`bg-[#00FF9C] absolute rounded-b-full ${ecto.height} ${ecto.position} ${ecto.width}`}
                />
              ))}
            </div>
          </div>
          
        ))}
      </div>
    </div>
  );
}