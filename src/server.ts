// src/server.ts
import app from "./app";
import { AppDataSource } from "./config/db";


const PORT = Number(process.env.PORT || 3000);

AppDataSource.initialize()
  .then(async () => {
    console.log("Data Source has been initialized!");
    app.listen(PORT, () => {
      console.log(`Server listening on http://localhost:${PORT}`);
    });
  })
  .catch((err) => {
    console.error("Error during Data Source initialization:", err);
  });
