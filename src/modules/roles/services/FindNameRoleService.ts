import { getCustomRepository } from "typeorm";
import RolesRepository from '../repositories/RolesRepository';
import { IFindByName } from "../models/IFindByName";
import { IRole } from "../models/IRole";

class FindNameRoleService {
  public async execute({name}: IFindByName): Promise<IRole[]>{
    const rolesRepository = getCustomRepository(RolesRepository)

    const roles = await rolesRepository.findByName({
      name
    })

    return roles
  }
}

export default FindNameRoleService