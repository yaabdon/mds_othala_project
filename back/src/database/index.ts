import "reflect-metadata";
import { DataSource } from "typeorm";

export const AppDataSource = new DataSource({
    type: "postgres",
    host: process.env.DB_HOST || "localhost",
    port: Number(process.env.DB_PORT) || 5432,
    username: process.env.DB_USERNAME || "postgres",
    password: process.env.DB_PASSWORD || "senha",
    database: process.env.DB_DATABASE || "user",
    entities: ["src/entities/*.ts"],
    synchronize: true,
    logging: true,
});

AppDataSource.initialize()
    .then(() => {
        console.log(" Banco conectado!");
    })
    .catch((err) => {
        console.error("Erro na conexão:", err);
    });