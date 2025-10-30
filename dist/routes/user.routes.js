"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// src/routes/user.routes.ts
const express_1 = require("express");
const user_controller_1 = require("../controllers/user.controller");
const router = (0, express_1.Router)();
router.post("/createUser", user_controller_1.createUser);
router.get("/", user_controller_1.listUsers);
exports.default = router;
//# sourceMappingURL=user.routes.js.map