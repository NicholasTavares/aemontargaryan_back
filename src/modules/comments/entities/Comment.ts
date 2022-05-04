import Theory from "@modules/theories/entities/Theory";
import User from "@modules/users/entities/User";
import { 
  Column, 
  CreateDateColumn, 
  DeleteDateColumn, 
  Entity, 
  ManyToOne, 
  PrimaryGeneratedColumn, 
  UpdateDateColumn 
} from "typeorm";
import { IComment } from '../models/IComment';

@Entity('comments')
class Comment implements IComment {

  @PrimaryGeneratedColumn('uuid')
  id: string

  @ManyToOne(() => Theory, (theory) => theory.id, {
    onDelete: 'CASCADE',
  })
  id_theory: string

  @ManyToOne(() => User, (user) => user.id, {
    onDelete: 'CASCADE',
  })
  id_user: string

  @Column()
  comment: string;

  @CreateDateColumn()
  created_at: Date

  @UpdateDateColumn()
  updated_at: Date

  @DeleteDateColumn()
  deleted_at: Date
}

export default Comment