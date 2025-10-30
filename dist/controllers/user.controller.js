"use strict";
// src/controllers/user.controller.ts
Object.defineProperty(exports, "__esModule", { value: true });
exports.listUsers = exports.createUser = void 0;
const db_1 = require("../config/db");
const User_1 = require("../entities/User");
const userRepo = () => db_1.AppDataSource.getRepository(User_1.User);
const createUser = async (req, res) => {
    try {
        const { name, email, bio } = req.body;
        const user = userRepo().create({ name, email, bio });
        const saved = await userRepo().save(user);
        return res.status(201).json(saved);
    }
    catch (err) {
        return res.status(500).json({ error: err.message });
    }
};
exports.createUser = createUser;
const listUsers = async (_req, res) => {
    try {
        const users = await userRepo().find();
        return res.json(users);
    }
    catch (err) {
        return res.status(500).json({ error: err.message });
    }
};
exports.listUsers = listUsers;
//# sourceMappingURL=user.controller.js.map