import "reflect-metadata";
import { DataSource } from "typeorm";

export const AppDataSource = new DataSource({
    type: "postgres",
    host: "localhost",
    port: 5432,
    username: "postgres",
    password: "senha",
    database: "user",
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