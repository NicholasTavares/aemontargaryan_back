import { getCustomRepository } from "typeorm";
import { IFindById } from "../models/IFindById";
import { ITheory } from "../models/ITheory";
import TheoriesRepository from "../repositories/TheoriesRepository";

class FindTheoryService {
  public async execute({id}: IFindById): Promise<ITheory> {
    const theoriesRepository = getCustomRepository(TheoriesRepository)

    const theory = await theoriesRepository.findById({
      id
    })

    return theory
  }
}

export default FindTheoryService