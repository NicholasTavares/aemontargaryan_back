import AppError from "@shared/errors/AppError";
import { getCustomRepository } from "typeorm";
import UsersRepository from "../repositories/UsersRepository";

class SoftDeleteUserService {
  public async execute(id: string) {
    const usersRepository = getCustomRepository(UsersRepository);

    const user = await usersRepository.findById(id)

    if (!user) {
      throw new AppError('User not found')
    }
    
    await usersRepository.softDelete(id)
  }
}

export default SoftDeleteUserService