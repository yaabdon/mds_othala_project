import "reflect-metadata";
import { DataSource } from "typeorm";

export const AppDataSource = new DataSource({
  type: "postgres",
  host: process.env.TYPEORM_HOST || "localhost",
  port: Number(process.env.TYPEORM_PORT) || 5432,
  username: process.env.TYPEORM_USERNAME || "postgres",
  password: process.env.TYPEORM_PASSWORD || "senha",
  database: process.env.TYPEORM_DATABASE || "user",
  entities: [process.env.TYPEORM_ENTITIES || "src/entities/*.ts"],
  migrations: [process.env.TYPEORM_MIGRATIONS || "src/database/migrations/*.ts"],
  synchronize: process.env.TYPEORM_SYNCHRONIZE === "true",
  logging: process.env.TYPEORM_LOGGING === "true",
  migrationsRun: process.env.TYPEORM_MIGRATIONS_RUN === "true",
  migrationsTableName: process.env.TYPEORM_MIGRATIONS_TABLE_NAME || "migrations",
});

// Só conecta se NÃO estiver em ambiente de teste
if (process.env.NODE_ENV !== "test") {
  AppDataSource.initialize()
    .then(() => {
      console.log(" Banco conectado!");
    })
    .catch((err) => {
      console.error("Erro na conexão:", err);
    });
}
