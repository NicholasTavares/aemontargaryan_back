import { getCustomRepository } from "typeorm";
import RolesRepository from '../repositories/RolesRepository';
import { IFindById } from "../models/IFindById";
import { IRole } from "../models/IRole";

class FindRoleService {
  public async execute ({id}: IFindById): Promise<IRole> {
    const rolesRepository = getCustomRepository(RolesRepository)

    const role = await rolesRepository.findById({
      id
    })

    return role
  }
}

export default FindRoleService