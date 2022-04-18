import User from '@modules/users/entities/User';
import { Column, CreateDateColumn, DeleteDateColumn, Entity, OneToMany, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";
import { IRole } from '../models/IRole';

@Entity('roles')
class Role implements IRole {

  @PrimaryGeneratedColumn('uuid')
  id: string

  @OneToMany(() => User, (user) => user.role)
  role: User

  @Column()
  name: string

  @CreateDateColumn()
  created_at: Date

  @UpdateDateColumn()
  updated_at: Date

  @DeleteDateColumn()
  deleted_at: Date
}

export default Role