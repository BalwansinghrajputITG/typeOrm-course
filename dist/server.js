"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// src/server.ts
const app_1 = __importDefault(require("./app"));
const db_1 = require("./config/db");
const PORT = Number(process.env.PORT || 3000);
db_1.AppDataSource.initialize()
    .then(async () => {
    console.log("Data Source has been initialized!");
    app_1.default.listen(PORT, () => {
        console.log(`Server listening on http://localhost:${PORT}`);
    });
})
    .catch((err) => {
    console.error("Error during Data Source initialization:", err);
});
//# sourceMappingURL=server.js.map