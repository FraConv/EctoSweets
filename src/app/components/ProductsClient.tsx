"use client";

import { useLanguage } from "@/context/LanguageContext";

export default function ProductsClient({ prodotti, slug }: any) {
  const { lang } = useLanguage();

    const ectoPlasma = [
    {id: "1", position: "left-3", height: "h-24", width: "w-8"},
    {id: "2", position: "left-11", height: "h-14", width: "w-8"},
    {id: "3", position: "left-19", height: "h-18", width: "w-8"},
    {id: "4", position: "left-39", height: "h-15", width: "w-8"},
    {id: "5", position: "left-55", height: "h-20", width: "w-8"},
    {id: "6", position: "left-47", height: "h-30", width: "w-8"},
  ];

  return (
    <div className="p-10 mb-64">
      <h1 className="text-3xl font-bold mb-6 flex justify-center">
        {slug}
      </h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-64">
        {prodotti.map((p: any) => (
          <div
            key={p._id}
            className="border p-4 rounded-3xl shadow-md bg-[#00FF9C] relative text-black flex flex-col"
          >
            <div className="flex justify-baseline">
              <p>{p.prezzo}</p>
            </div>

            <div className="h-32 w-full overflow-hidden">
              <img
                className="object-contain w-full h-full"
                src={p.immagine}
                alt={p.nome}
              />
            </div>

            <div className="flex justify-center mt-3">
              <h2>{p.nome?.[lang] || p.nome}</h2>
            </div>

            <div className="flex justify-baseline mt-80 absolute font-bold text-white">
              <p>{lang==="it" ? "Ingredienti" : "Ingredients"}:</p>
            </div>

            <div className="flex justify-baseline mt-[21.5rem] font-medium absolute text-white">
              <p>{p.descrizione?.[lang]}</p>
            </div>
            <div className="absolute bottom-1">
              {ectoPlasma.map((ecto) => (
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