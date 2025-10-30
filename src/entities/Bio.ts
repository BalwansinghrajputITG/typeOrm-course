import {
  Column,
  Entity,
  JoinColumn,
  OneToOne,
  PrimaryGeneratedColumn,
} from "typeorm";
import { User } from "./User";

@Entity()
export class UserBio {
  @PrimaryGeneratedColumn()
  id!: number;

  @Column()
  userId!: number;

  @Column()
  aductaion!: string;

  @Column()
  addresse!: string;

  @OneToOne(() => User, (user) => user.bio)
  @JoinColumn()
  user!: User;
}
