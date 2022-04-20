import { getCustomRepository } from "typeorm";
import RolesRepository from '../repositories/RolesRepository';
import { IListRoles } from "../models/IListRoles";

class ListRolesService {
  public async execute(): Promise<IListRoles> {
    const rolesRepository = getCustomRepository(RolesRepository)

    const roles = await rolesRepository.findAll()

    return roles
  }
}

export default ListRolesService