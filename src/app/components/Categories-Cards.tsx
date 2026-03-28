import { connectDB } from "@/lib/mongodb";
import Categorie from "@/models/Categorie";

export default async function CategoriesCards(){
    
    await connectDB();
    const categorie = await Categorie.find();

    const ectoPlasma = [
        {position: "left-20", height: "h-12", width: "w-8"},
        {position: "left-28", height: "h-9", width: "w-8"},
        {position: "left-36", height: "h-16", width: "w-8"},
        {position: "left-44", height: "h-24", width: "w-8"},
    ]

    return(
        <>
            <div className="w-full max-w-[20rem] grid p-6 mt-8 grid-cols-1 gap-32 md:grid-cols-3 md:max-w-[80rem]">
                {categorie.map((cat)=>(
                    <div key={cat.id} className="bg-[#00FF9C] relative rounded-3xl p-5 flex flex-col justify-between">
                        <div className="h-32 w-full overflow-hidden">
                            <img 
                                className="object-contain w-full h-full"
                                src={cat.immagine} 
                                alt={cat.nome.it} 
                            />
                        </div>
                        <div className="flex mt-3 justify-center text-black text-[1.2rem] font-bold">
                            <p>{cat.nome.it}</p>
                        </div>
                        <div className="flex justify-center text-black text-[1rem] font-medium">
                            <p>{cat.prezzo}</p>
                        </div>
                        <div className="absolute bottom-1">
                            {ectoPlasma.map((s,i) => (
                                <div 
                                    key={i}
                                    className={`bg-[#00FF9C] absolute rounded-b-full ${s.height} ${s.position} ${s.width}`}
                                    >
                                </div>
                            ))}
                        </div>
                    </div>
                ))}
            </div>
        </>
    )
}