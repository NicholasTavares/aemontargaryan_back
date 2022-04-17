import User from "@modules/users/entities/User"

export interface IRole {
  id: string
  role: User
  created_at: Date
  updated_at: Date
  deleted_at: Date
}