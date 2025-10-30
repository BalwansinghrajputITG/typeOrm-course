import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { User } from "./User";

@Entity()
export class Course {
  @PrimaryGeneratedColumn()
  code!: number;

  @Column()
  name!: string;

  @Column()
  time!: string;

  @OneToMany(() => User, (user) => user.course)
  users!: User[];
}
