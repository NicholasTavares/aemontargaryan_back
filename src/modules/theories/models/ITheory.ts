import User from "@modules/users/entities/User"

export interface ITheory {
  id: string
  title: string 
  id_user: User
  created_at: Date
  updated_at: Date
  deleted_at: Date
}