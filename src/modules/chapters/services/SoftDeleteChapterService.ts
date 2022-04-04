import { getCustomRepository } from "typeorm";
import ChapterRepository from "../repositories/ChapterRepository";

class SoftDeleteChapterService {
  public async execute(id: string) {
    const chaptersRepository = getCustomRepository(ChapterRepository);
    
    await chaptersRepository.softDelete(id)
  }
}

export default SoftDeleteChapterService