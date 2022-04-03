import { getCustomRepository } from "typeorm";
import UsersRepository from "../repositories/UsersRepository";

class SoftDeleteUserService {
  public async execute(id: string) {
    const usersRepository = getCustomRepository(UsersRepository);
    
    await usersRepository.softDelete(id)
  }
}

export default SoftDeleteUserService