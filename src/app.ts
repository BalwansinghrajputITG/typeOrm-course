// src/app.ts
import express from "express";
import dotenv from "dotenv";
import userRoutes from "./routes/user.routes";
import bioRoutes from "./routes/bio.routes";
import courseRoutes from "./routes/course.routes";
import { errorHandler } from "./middlewares/errolHandller";

dotenv.config();

const app = express();
app.use(express.json());

app.use("/api/users", userRoutes);
app.use("/api/bio", bioRoutes);
app.use("/api/course", courseRoutes);
app.use(errorHandler);

app.get("/", (_req, res) => res.send("TypeORM + TS + Express API is running"));

export default app;
