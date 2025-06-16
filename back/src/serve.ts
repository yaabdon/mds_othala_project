import "reflect-metadata";
import express from "express";
import { routes } from "./routes";
import { AppDataSource } from "./database";

const app = express(); // <- ESSENCIAL

app.use(express.json());
app.use(routes);

const PORT = process.env.PORT || 3000;

if (process.env.NODE_ENV !== 'test') {
  AppDataSource.initialize()
    .then(() => {
      console.log("Conexão com o banco de dados estabelecida com sucesso.");
      app.listen(PORT, () => {
        console.log(` Servidor rodando na porta ${PORT}`);
      });
    })
    .catch((err) => {
      console.error("Erro ao conectar com o banco de dados:", err);
    });
}

export default app;

