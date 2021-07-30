import {
  Entity,
  Column,
  ManyToOne,
  JoinColumn,
  PrimaryColumn,
  CreateDateColumn,
  UpdateDateColumn,
} from "typeorm";
import { v4 as uuidV4 } from "uuid";

import { Module } from "./Module";

@Entity("lessons")
class Lesson {
  @PrimaryColumn()
  id: string;

  @Column()
  name: string;

  @Column()
  lesson_date: Date;

  @Column()
  module_id: string;

  @ManyToOne(() => Module)
  @JoinColumn({ name: "module_id" })
  module: string;

  @CreateDateColumn()
  created_at: string;

  @UpdateDateColumn()
  updated_at: string;

  constructor() {
    if (!this.id) {
      this.id = uuidV4();
    }
  }
}

export { Lesson };
