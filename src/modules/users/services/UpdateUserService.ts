import AppError from "@shared/errors/AppError";
import { getCustomRepository } from "typeorm";
import { IUpdateUser } from "../models/IUpdateUser";
import { IUser } from "../models/IUser";
import UsersRepository from "../repositories/UsersRepository";

class UpdateUserService {
  public async execute({id, name, email}: IUpdateUser): Promise<IUser> {
    const usersRepository = getCustomRepository(UsersRepository)

    const user = await usersRepository.findById({
      id
    })

    if (user.name === name || user.email === email) {
      return user
    }

    if (email) {
      const userExists = await usersRepository.findByEmail({
        email
      })

      if (userExists && email !== user.email) {
        throw new AppError('There is already one user with this email ')
      }
    }

    user.name = name
    user.email = email

    await usersRepository.save(user)

    return user
  }
}

export default UpdateUserService