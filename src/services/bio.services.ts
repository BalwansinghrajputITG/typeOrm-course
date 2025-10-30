import { AppDataSource } from "../config/db";
import { UserBio } from "../entities/Bio";
const bioRepo = () => AppDataSource.getRepository(UserBio);

export const addBio = async (data: UserBio) => {
  const { userId, addresse, aductaion } = data;

  const userBio = bioRepo().create({ userId, addresse, aductaion });
  const saved = await bioRepo().save(userBio);

  return saved;
};
