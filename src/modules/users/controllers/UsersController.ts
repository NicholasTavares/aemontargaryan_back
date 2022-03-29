import { instanceToInstance } from "class-transformer";
import { Request, Response } from "express";
import CreateUserService from "../services/CreateUserService";
import FindUserService from "../services/FindUserService";
import ListUserService from "../services/ListUsersService";

export default class UsersController {

  public async create(request: Request, response: Response): Promise<Response> {
    const { name, email, password } = request.body

    const createUser = new CreateUserService()

    const user = await createUser.execute({
      name,
      email,
      password
    })

    return response.json(instanceToInstance(user))
  }

  public async show(request: Request, response: Response): Promise<Response> {
    const {id} = request.body

    const showUser = new FindUserService()

    const user = await showUser.execute(id)

    return response.json(instanceToInstance(user))
  }

  public async list(request: Request, response: Response): Promise<Response> {
    const listUsers = new ListUserService()

    const users = await listUsers.execute()

    return response.json(instanceToInstance(users))
  }
}