import { getCustomRepository } from "typeorm";
import RolesRepository from '../repositories/RolesRepository';
import { ISoftDelete } from "../models/ISoftDelete";

class SoftDeleteRoleService {
  public async execute({id}: ISoftDelete) {
    const rolesRepository = getCustomRepository(RolesRepository)

    await rolesRepository.softDelete({
      id
    })
  }
}

export default SoftDeleteRoleService