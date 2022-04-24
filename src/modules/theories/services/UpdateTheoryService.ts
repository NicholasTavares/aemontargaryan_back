import { getCustomRepository } from "typeorm";
import { ITheory } from "../models/ITheory";
import TheoriesRepository from "../repositories/TheoriesRepository";

class UpdateTheoryService {
  public async execute({id, title, theory_text}): Promise<ITheory> {
    const theoriesRepository = getCustomRepository(TheoriesRepository)

    const theory = await theoriesRepository.findById({
      id
    })

    if (title && title !== theory.title) {
        theory.title = title
    }

    if (theory_text && theory_text !== theory.theory_text.theory) {
      theory.theory_text.theory = theory_text
    }

    await theoriesRepository.save(theory)

    return theory
  }
}

export default UpdateTheoryService