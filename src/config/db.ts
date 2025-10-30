import "reflect-metadata";
import { DataSource } from "typeorm";
import dotenv from "dotenv";
import { User } from "../entities/User";
import { UserBio } from "../entities/Bio";
import { Course } from "../entities/Course";

dotenv.config();

export const AppDataSource = new DataSource({
  type: "mysql",
  host: process.env.DB_HOST,
  port: Number(process.env.DB_PORT || 3306),
  username: process.env.DB_USER,
  password: process.env.DB_PASS,
  database: process.env.DB_NAME,
  entities: [User , UserBio , Course],
  migrations: [__dirname + "/migrations/*.{ts,js}"],
  synchronize: true,
  logging: true,
  subscribers: [],
});
