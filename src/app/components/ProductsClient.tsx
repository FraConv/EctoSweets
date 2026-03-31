"use client";
import Footer from "./Footer";
import { useLanguage } from "@/context/LanguageContext";
import { FaArrowLeft } from "react-icons/fa";
import { useRouter } from "next/navigation";

export default function ProductsClient({ prodotti, slug }: any) {
  const { lang } = useLanguage();

    const ectoPlasma = [
    {id: "1", position: "left-3", height: "h-24", width: "w-8"},
    {id: "2", position: "left-10", height: "h-14", width: "w-8"},
    {id: "3", position: "left-17", height: "h-30", width: "w-8"},
    {id: "4", position: "left-24", height: "h-20", width: "w-8"},
    {id: "5", position: "left-31", height: "h-8", width: "w-8"},
    {id: "6", position: "left-38", height: "h-12", width: "w-8"},
  ];

  const router = useRouter();

  return (
    <>
      <div className="p-10 mb-64">
        <div className="relative flex items-center justify-center mb-6">
          <div className="absolute left-0">
            <button onClick={() => router.push("/")}>
              <FaArrowLeft size={24} />
            </button>
          </div>
          <h1 className="text-3xl font-bold">
            {slug}
          </h1>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-44">
          {prodotti.map((p: any) => (
            <div
              key={p._id}
              className="border p-4 rounded-4xl shadow-md bg-[#00FF9C] relative text-black flex flex-col"
            >
              <div className="flex justify-baseline">
                <p className="text-[1.1rem] font-semibold">{p.prezzo}</p>
              </div>
              <div className="h-32 w-full overflow-hidden">
                <img
                  className="object-contain w-full h-full"
                  src={p.immagine}
                  alt={p.nome}
                />
              </div>
              <div className="flex justify-center mt-3">
                <h2 className="text-[1.3rem] font-bold">{p.nome?.[lang] || p.nome}</h2>
              </div>
              <div className="absolute bottom-1 ml-5">
                {ectoPlasma.map((ecto) => (
                  <div 
                    key={ecto.id}
                    className={`bg-[#00FF9C] absolute rounded-b-full ${ecto.height} ${ecto.position} ${ecto.width}`}
                  />
                ))}
              </div>
              <div className="flex justify-baseline mt-3 text-[1.1rem] font-bold text-black">
                <p>{lang==="it" ? "Ingredienti" : "Ingredients"}:</p>
              </div>
              <div className="flex justify-baseline  font-medium  text-black">
                <p>{p.descrizione?.[lang]}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="flex-grow mb-48"/>
      <Footer></Footer>
    </>
  );
}