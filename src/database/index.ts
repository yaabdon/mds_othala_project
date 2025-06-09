import "reflect-metadata";
import "dotenv/config"; 
import { DataSource } from "typeorm";

// export const AppDataSource = new DataSource({
//     type: "postgres",
//     host: "localhost",
//     port: 5432,
//     username: "postgres",
//     password: "senha",
//     database: "user",
//     entities: ["src/entities/*.ts"],
//     synchronize: true,
//     logging: true,
// });

export const AppDataSource = new DataSource({
  type: "postgres",
  host: process.env.TYPEORM_HOST,
  port: Number(process.env.TYPEORM_PORT),
  username: process.env.TYPEORM_USERNAME,
  password: process.env.TYPEORM_PASSWORD,
  database: process.env.TYPEORM_DATABASE,
  entities: [process.env.TYPEORM_ENTITIES],
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

