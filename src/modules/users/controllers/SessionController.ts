import { instanceToInstance } from "class-transformer"
import { Request, Response } from "express"
import CreateSessionsService from "../services/CreateSessionService"

export default class SessionController {
  public async createSession(request: Request, response: Response): Promise<Response> {
    const { email, password } = request.body

    const session = new CreateSessionsService()

    const users = await session.execute({
      email,
      password
    })

    return response.json(instanceToInstance(users))
  }
}