import { getCustomRepository } from "typeorm";
import { IFindByTitle } from "../models/IFindByTitle";
import { ITheory } from "../models/ITheory";
import TheoriesRepository from "../repositories/TheoriesRepository";

class FindTitleTheoryService {
  public async execute({title}: IFindByTitle): Promise<ITheory[]> {
    const theoriesRepository = getCustomRepository(TheoriesRepository)

    const theories = theoriesRepository.findByTitle({
      title
    })

    return theories
  }
}

export default FindTitleTheoryService