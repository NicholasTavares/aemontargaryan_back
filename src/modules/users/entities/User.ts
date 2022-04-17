import Role from '@modules/roles/entities/Role';
import { Exclude } from 'class-transformer';
import { Column, CreateDateColumn, DeleteDateColumn, Entity, ManyToOne, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";
import { IUser } from '../models/IUser'

@Entity('users')
class User implements IUser {
  
  @PrimaryGeneratedColumn('uuid')
  id: string

  @Column()
  name: string

  @Column()
  email: string

  @Column({select: false})
  @Exclude()
  password: string

  @ManyToOne(() => Role, (role) => role.id)
  role: Role

  @CreateDateColumn()
  created_at: Date

  @UpdateDateColumn()
  updated_at: Date

  @DeleteDateColumn()
  deleted_at: Date
}

export default User