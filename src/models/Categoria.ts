import mongoose from "mongoose";

const CategorieSchema = new mongoose.Schema({
  nome: {
    it: String,
    en: String
  },
  prezzo: String,
  immagine: String,
  slug: {
    it: String,
    en: String
  },
});

export default mongoose.models.Categorie_Prodotti ||
  mongoose.model("Categorie_Prodotti", CategorieSchema, "Categorie_Prodotti");