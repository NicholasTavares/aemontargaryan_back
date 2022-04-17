import { getCustomRepository } from "typeorm";
import { IUser } from "../models/IUser";
import UsersRepository from "../repositories/UsersRepository";

class FindNameUserService {
  public async execute(name: string): Promise<IUser[]> {
    const usersRepository = getCustomRepository(UsersRepository)

    const users = await usersRepository.findByName({
      name
    })

    return users
  }

}

export default FindNameUserService