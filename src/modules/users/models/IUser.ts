import Role from "@modules/roles/entities/Role"

export interface IUser {
  id: string
  name: string
  email: string
  password: string
  role: Role
  created_at: Date
  updated_at: Date
  deleted_at: Date
}