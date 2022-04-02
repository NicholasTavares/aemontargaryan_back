import AppError from "@shared/errors/AppError";
import { getCustomRepository } from "typeorm";
import { IUser } from "../models/IUser";
import UsersRepository from "../repositories/UsersRepository";

class FindEmailUserService {
  public async execute(email: string): Promise<IUser> {
    const usersRepository = getCustomRepository(UsersRepository)

    const user = await usersRepository.findByEmail(email)

    if (!user) {
      throw new AppError('User not found')
    }

    return user
  }

}

export default FindEmailUserService