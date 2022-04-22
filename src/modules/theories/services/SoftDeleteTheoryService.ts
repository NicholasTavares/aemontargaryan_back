import { getCustomRepository } from "typeorm";
import { ISoftDelete } from "../models/ISoftDelete";
import TheoriesRepository from "../repositories/TheoriesRepository";

class SoftDeleteTheoryService {
  public async execute({id}: ISoftDelete) {
    const theoriesRepository = getCustomRepository(TheoriesRepository)

    await theoriesRepository.softDelete({
      id
    })
  }
}

export default SoftDeleteTheoryService