export interface ICreateSession {
  email: string
  password: string
}

export interface ICreateSessionResponse {
  user: ICreateSession,
  token: string
}