import mongoose from "mongoose";

const ProdottiSchema = new mongoose.Schema({
  nome: String,
  prezzo: String,
  categoria: String,
  immagine: String,
  descrizione: {
    it: String,
    en: String
  },
});

export default mongoose.models.Prodotti ||
  mongoose.model("Prodotti", ProdottiSchema, "Prodotti");