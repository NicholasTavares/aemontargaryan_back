import { instanceToInstance } from "class-transformer";
import { Request, Response } from "express";
import CreateUserService from "../services/CreateUserService";
import FindNameUserService from "../services/FindNameUserService";
import FindUserService from "../services/FindUserService";
import ListUserService from "../services/ListUsersService";
import SoftDeleteUserService from "../services/SoftDeleteUserService";
import UpdateUserService from "../services/UpdateUserService";

export default class UsersController {

  public async create(request: Request, response: Response): Promise<Response> {
    const { name, email, password } = request.body

    console.log(request.query)

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

  public async findName(request: Request, response: Response): Promise<Response> {
    const {name} = request.body

    const findNameUsers = new FindNameUserService()

    const users = await findNameUsers.execute(name)

    return response.json(instanceToInstance(users))
  }

  public async list(request: Request, response: Response): Promise<Response> {
    const listUsers = new ListUserService()

    const users = await listUsers.execute()

    return response.json(instanceToInstance(users))
  }


  public async update(request: Request, response: Response): Promise<Response> {
    const { name, email } = request.body
    const { id } = request.params

    const updateUser = new UpdateUserService()

    const user = await updateUser.execute({
      id,
      name,
      email,
    })

    return response.json(instanceToInstance(user))
  }

  public async softDelete(request: Request, response: Response): Promise<Response> {
    const { id } = request.params

    const softDeleteUser = new SoftDeleteUserService()
    
    await softDeleteUser.execute(id)

    return response.json([])
  }
}