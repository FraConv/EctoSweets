import mongoose from "mongoose";

const CopertoSchema = new mongoose.Schema({
    coperto: String
})

export default mongoose.models.Coperto || 
    mongoose.model("Coperto", CopertoSchema, "Coperto")