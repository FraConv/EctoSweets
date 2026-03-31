import Coperto from "@/models/Coperto";
import { connectDB } from "@/lib/mongodb";

export default async function CoverCharge() {
    await connectDB();

    const coperto = await Coperto.find().lean();

    return (
        <div className="mt-2">
            {coperto.map((cop) => (
                <h1 className="text-[1.3rem]" key={cop._id}>
                    Coperto: {cop.coperto}
                </h1>
            ))}
        </div>
    );
}