import { AppDataSource } from "../config/db";
import { Course } from "../entities/Course";
const courseRepo = () => AppDataSource.getRepository(Course);

export const createCourse = async (data: CourseDataType) => {
  const { name, time } = data;

  const course = courseRepo().create({ name, time });
  const saved = await courseRepo().save(course);

  return saved;
};



