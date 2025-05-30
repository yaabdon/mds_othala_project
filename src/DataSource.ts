import { DataSource } from "typeorm";
import { User } from "./entities/User"

const AppDataSource = new DataSource({
  type: "postgres",
  host: "localhost",
  username: "admin",
  password: "senha",
  database: "user",
  entities: [User],
  synchronize: true,
});
