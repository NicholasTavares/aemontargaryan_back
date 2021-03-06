import { instanceToInstance } from "class-transformer"
import { Request, Response } from "express"
import CreateRoleService from "../services/CreateRoleService"
import FindNameRoleService from "../services/FindNameRoleService"
import FindRoleService from "../services/FindRoleService"
import ListRolesService from "../services/ListRolesService"
import SoftDeleteRoleService from "../services/SoftDeleteRoleService"
import UpdateRoleService from "../services/UpdateRoleService"

export default class RolesController {
  
  public async create(request: Request, response: Response): Promise<Response> {
    const { name } = request.body

    const createUser = new CreateRoleService()

    const user = await createUser.execute({
      name
    })

    return response.json(instanceToInstance(user))
  }

  public async show(request: Request, response: Response): Promise<Response> {
    const {id} = request.params

    const showRole = new FindRoleService()

    const role = await showRole.execute({
      id
    })

    return response.json(instanceToInstance(role))
  }

  public async list(request: Request, response: Response): Promise<Response> {
    const listRoles = new ListRolesService()

    const roles = await listRoles.execute()

    return response.json(instanceToInstance(roles))
  }

  public async update(request: Request, response: Response): Promise<Response> {
    const {id} = request.params
    const {name} = request.body

    const updateRoles = new UpdateRoleService()

    const role = await updateRoles.execute({
      id,
      name
    })

    return response.json(instanceToInstance(role))
  }

  public async findName(request: Request, response: Response): Promise<Response> {
    const {name} = request.body

    const findNameRoles = new FindNameRoleService()

    const roles = await findNameRoles.execute({
      name
    })

    return response.json(instanceToInstance(roles))
  }

  public async softDelete(request: Request, response: Response): Promise<Response> {
    const {id} = request.params

    const softDeleteRoles = new SoftDeleteRoleService()

    await softDeleteRoles.execute({
      id
    })

    return response.json(true)
  }
}