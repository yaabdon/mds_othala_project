import { DataSource } from "typeorm";
import { User } from "./entities/User"

const AppDataSource = new DataSource({
  type: "postgres",
  host: process.env.DB_HOST || "localhost",
  port: Number(process.env.DB_PORT) || 5432,
  username: process.env.DB_USERNAME || "postgres",
  password: process.env.DB_PASSWORD || "senha",
  database: process.env.DB_DATABASE || "user",
  entities: [User],
  synchronize: true,
});
