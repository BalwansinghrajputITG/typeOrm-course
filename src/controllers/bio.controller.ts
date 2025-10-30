import { NextFunction, Request, Response } from "express";
import { addBio } from "../services/bio.services";

export const createUserBio = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const bio = await addBio(req.body);
    res.status(200).json({
      msg: "user Bio added",
      bio,
    });
  } catch (error) {
    next(error);
  }
};
