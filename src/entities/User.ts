import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
  UpdateDateColumn,
  ManyToOne,
  OneToMany,
} from "typeorm";
import { UserBio } from "./Bio";
import { Course } from "./Course";

@Entity()
export class User {
  @PrimaryGeneratedColumn()
  id!: number;

  @Column({ length: 100 })
  name!: string;

  @Column({ unique: true })
  email!: string;

  @CreateDateColumn()
  createdAt!: Date;

  @UpdateDateColumn()
  updatedAt!: Date;

  @ManyToOne(() => Course, (course) => course.users)
  course!: Course;

  @OneToMany(() => UserBio, (bio) => bio.user)
  bio!: UserBio[];
}
