import { NextFunction, Request, Response } from "express";
import {
  createNewUser,
  getAllUser,
  upadatUserById,
} from "../services/user.services";

export const createUser = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const seved = await createNewUser(req.body);
    return res.status(201).json({
      msg: "user create suss",
      seved,
    });
  } catch (err: any) {
    next(err);
  }
};

export const listUsers = async (
  req: Request<{}, {}, {}, Quary>,
  res: Response,
  next: NextFunction
) => {
  try {
    const page: string = req.query.page;
    const limit: string = req.query.limit;
    const users = await getAllUser({ page, limit });
    return res.json(users);
  } catch (err: any) {
    next(err);
  }
};

export const getUsersById = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const uapdatUser = await upadatUserById(req.body);
    return res.status(200).json({
      msg: "user updated sussesfully",
      user: uapdatUser,
    });
  } catch (err) {
    next(err);
  }
};
