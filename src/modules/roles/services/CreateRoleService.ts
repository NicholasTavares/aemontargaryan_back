import AppError from '@shared/errors/AppError';
import RolesRepository from '../repositories/RolesRepository';
import { ICreateRole } from '../models/ICreateRole';
import { IRole } from '../models/IRole';
import { getCustomRepository } from 'typeorm';

class CreateRoleService {
  public async execute({name}: ICreateRole): Promise<IRole> {
    const rolesRespository = getCustomRepository(RolesRepository)

    const nameExists = await rolesRespository.findByExactName({
      name
    })

    if (nameExists){
      throw new AppError('Name already used')
    }

    const role = await rolesRespository.create({
      name
    })

    await rolesRespository.save(role)

    return role
  }
}

export default CreateRoleService