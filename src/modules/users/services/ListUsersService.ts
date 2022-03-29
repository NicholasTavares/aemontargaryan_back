import { getCustomRepository } from "typeorm";
import { IListUsers } from "../models/IListUsers";
import UsersRepository from "../repositories/UsersRepository";

class ListUserService {
  public async execute(): Promise<IListUsers | undefined> {
    const usersRepository = getCustomRepository(UsersRepository)
    const users = await usersRepository.findAll()

    return users
  }
}

export default ListUserService