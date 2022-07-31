import express from "express";
import db from "./config/dbConnect.js";
import routes from './routes/index.js'

db.on("error", console.log.bind(console, "Erro de conexão com o banco"));
db.once("open", () => {
  console.log("Conexão com o banco estabelecida.");
});

const app = express();

app.use(express.json())
app.use(express.urlencoded({extended: true}));
app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', "*");
  res.header('Access-Control-Allow-Headers', '*');
  res.header('Access-Control-Allow-Credentials', true);
  res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
  next();
})
routes(app)

export default app;
