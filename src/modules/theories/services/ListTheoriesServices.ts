import { getCustomRepository } from "typeorm";
import { IListTheories } from "../models/IListTheories";
import TheoriesRepository from "../repositories/TheoriesRepository";

class ListTheoriesService {
  public async execute(): Promise<IListTheories> {
    const theoriesRepository = getCustomRepository(TheoriesRepository)

    const theories = await theoriesRepository.findAll()

    return theories
  }
}

export default ListTheoriesService