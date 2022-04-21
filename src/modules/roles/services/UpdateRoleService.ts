import AppError from "@shared/errors/AppError";
import { getCustomRepository } from "typeorm";
import { IUpdateRole } from "../models/IUpdateRole";
import RolesRepository from '../repositories/RolesRepository';

class UpdateRoleService {
  public async execute({id, name}: IUpdateRole): Promise<IUpdateRole> {
    const rolesRepository = getCustomRepository(RolesRepository)

    const role = await rolesRepository.findById({
      id
    })

    if (role.name === name) {
      return role
    }

    const nameExists = await rolesRepository.findByExactName({
      name
    })

    if (nameExists) {
      throw new AppError('Name already used')
    }

    role.name = name

    await rolesRepository.save(role)

    return role
  }
}

export default UpdateRoleService