import { AppDataSource } from "../config/db";
import { User } from "../entities/User";
const userRepo = () => AppDataSource.getRepository(User);

export const createNewUser = async (data: User) => {
  const { name, email, bio } = data;

  console.log(name, email, bio);

  const user = userRepo().create({ name, email, bio });
  const saved = await userRepo().save(user);

  return saved;
};

export const getAllUser = async (data: Quary) => {
  const { page, limit } = data;

  const pages: number = Number(page) || 1;
  const limits: number = Number(limit) || 5;
  const skip: number = (pages - 1) * limits;

  const users = await userRepo().find({
    skip: skip,
    take: limits,
    relations: ["bio", "course"],
  });
  return users;
};

export const upadatUserById = async (data: User) => {
  const { name, bio, id } = data;
  const user = await userRepo().findOne({ where: { id: id } });

  if (user) {
    user.name = name;
    user.bio = bio;
    const updateUser = await userRepo().save(user);
    return updateUser;
  }
};

export const enrollCourse = async (data: any) => {


  
};
