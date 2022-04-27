import Theory_text from "@modules/theories_text/entities/Theory_text";
import User from "@modules/users/entities/User";
import { 
  Column, 
  CreateDateColumn, 
  DeleteDateColumn, 
  Entity, 
  ManyToOne, 
  OneToOne, 
  PrimaryGeneratedColumn, 
  UpdateDateColumn 
} from "typeorm";
import { ITheory } from "../models/ITheory";

@Entity('theories')
class Theory implements ITheory {
  @PrimaryGeneratedColumn('uuid')
  id: string

  @Column()
  title: string

  @OneToOne(() => Theory_text, (theory_text) => theory_text.id_theory, {cascade: true})
  theory_text: Theory_text

  @ManyToOne(() => User, (user) => user.id, {
    onDelete: 'CASCADE'
  })
  id_user: string

  @CreateDateColumn()
  created_at: Date

  @UpdateDateColumn()
  updated_at: Date

  @DeleteDateColumn()
  deleted_at: Date
}

export default Theory