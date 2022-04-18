import User from "@modules/users/entities/User"

export interface IRole {
  id: string
  role: User
  name: string
  created_at: Date
  updated_at: Date
  deleted_at: Date
}