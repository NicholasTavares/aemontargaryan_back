import Theory_text from "@modules/theories_text/entities/Theory_text"

export interface ITheory {
  id: string
  title: string 
  theory_text: Theory_text
  id_user: string
  created_at: Date
  updated_at: Date
  deleted_at: Date
}