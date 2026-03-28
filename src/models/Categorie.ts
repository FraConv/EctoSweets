import mongoose from "mongoose";

const CategorieSchema = new mongoose.Schema({
  nome: {
    it: String,
    gb: String
  },
  prezzo: String,
  immagine: String
});

export default mongoose.models.Categorie_Prodotti ||
  mongoose.model("Categorie_Prodotti", CategorieSchema, "Categorie_Prodotti");