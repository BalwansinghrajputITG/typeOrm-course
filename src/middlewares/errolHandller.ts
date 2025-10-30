import { Request, Response } from "express";

export const errorHandler = async (req: Request, res: Response, msg: any) => {
  return res.status(400).json({
    msg: `server error ${msg}`,
  });
};
