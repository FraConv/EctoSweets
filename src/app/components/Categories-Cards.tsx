"use client";

import { useLanguage } from "@/context/LanguageContext";
import { useEffect, useState } from "react";
import Link from "next/link";

export default function CategoriesCards() {
  const { lang } = useLanguage();
  const [categoria, setCategoria] = useState<any[]>([]);

  useEffect(() => {
    fetch("/api/categorie")
      .then(res => res.json())
      .then(data => setCategoria(data));
  }, []);

  const ectoPlasma = [
    {id: "1", position: "left-20", height: "h-12", width: "w-8"},
    {id: "2", position: "left-28", height: "h-9", width: "w-8"},
    {id: "3", position: "left-36", height: "h-16", width: "w-8"},
    {id: "4", position: "left-44", height: "h-24", width: "w-8"},
  ];

  return (
    <div className="w-full max-w-[20rem] grid p-6 mt-3 grid-cols-1 gap-40 md:grid-cols-3 md:max-w-[80rem]">
      {categoria.map((cat) => (
        <Link key={cat.slug} href={`/products/${cat.slug}`}>
          <div className="bg-[#00FF9C] relative rounded-4xl p-5 flex flex-col">

            <div className="h-32 w-full overflow-hidden">
              <img 
                className="object-contain w-full h-full"
                src={cat.immagine} 
                alt={cat.nome?.[lang]} 
              />
            </div>

            <div className="flex mt-3 justify-center text-black text-[1.3rem] font-bold">
              <p>{cat.nome?.[lang]}</p>
            </div>

            <div className="flex justify-center text-black text-[1.1rem] font-semibold">
              <p>{cat.prezzo}</p>
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
        </Link>
      ))}
    </div>
  );
}