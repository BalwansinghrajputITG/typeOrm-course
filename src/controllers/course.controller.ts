import { Request, Response } from "express";
import { createCourse } from "../services/course.servies";

export const createCourses = async (req: Request, res: Response) => {
  try {
    const coures = await createCourse(req.body);
    res.status(200).json({
      msg: "user Bio added",
      coures,
    });
  } catch (error) {}
};
