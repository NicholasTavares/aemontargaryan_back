import Role from '@modules/roles/entities/Role';
import Theory from '@modules/theories/entities/Theory';
import { Exclude } from 'class-transformer';
import { Column, CreateDateColumn, DeleteDateColumn, Entity, ManyToOne, OneToMany, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";
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

  @OneToMany(() => Theory, (theory) => theory.id_user)
  theories: Theory[]

  @CreateDateColumn()
  created_at: Date

  @UpdateDateColumn()
  updated_at: Date

  @DeleteDateColumn()
  deleted_at: Date
}

export default User