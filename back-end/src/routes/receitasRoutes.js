import express from "express";
import ReceitaController from "../controllers/receitasController.js";
import multer from "multer";
import path from "path";

const IMAGES_PATH = "../front-end/src/assets/images/receitas";
const receitas = express.Router();
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, IMAGES_PATH);
  },
  filename: (req, file, cb) => {
    cb(null, Date.now() + path.extname(file.originalname));
  },
});
const upload = multer({ storage: storage });

receitas
  .get("/receitas", ReceitaController.getReceitas)
  .get("/receitas/busca", ReceitaController.getReceitaByName)
  .post("/receitas", upload.single("foto"), ReceitaController.addReceita)
  .put("/receitas/:id", ReceitaController.updateReceitaByID)
  .delete("/receitas/:id", ReceitaController.removeReceitaByID);

export { receitas, IMAGES_PATH };
