import { getCustomRepository } from "typeorm";
import { ICreateTheory } from "../models/ICreateTheory";
import { ITheory } from "../models/ITheory";
import TheoriesRepository from "../repositories/TheoriesRepository";

class CreateTheoryService {
  public async execute({theory, title, id_user}: ICreateTheory): Promise<ITheory> {
    const theoriesRepository = getCustomRepository(TheoriesRepository)

    const theoryCreated = await theoriesRepository.create({
      title,
      id_user,
      theory
    })

    await theoriesRepository.save(theoryCreated)

    return theoryCreated
  }
}

export default CreateTheoryService