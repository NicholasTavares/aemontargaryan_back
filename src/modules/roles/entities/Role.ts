import { 
  Column, 
  CreateDateColumn, 
  DeleteDateColumn, 
  Entity, 
  PrimaryGeneratedColumn, 
  UpdateDateColumn 
} from "typeorm";
import { IRole } from '../models/IRole';

@Entity('roles')
class Role implements IRole {

  @PrimaryGeneratedColumn('uuid')
  id: string

  @Column({default: 'noviço'})
  name: string

  @CreateDateColumn()
  created_at: Date

  @UpdateDateColumn()
  updated_at: Date

  @DeleteDateColumn()
  deleted_at: Date
}

export default Role