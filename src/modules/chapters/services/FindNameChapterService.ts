import { getCustomRepository } from "typeorm";
import { IChapter } from "../models/IChapter";
import ChaptersRepository from "../repositories/ChapterRepository";

class FindNameChapterService {
  public async execute(name: string): Promise<IChapter[]> {
    const chaptersRepository = getCustomRepository(ChaptersRepository)

    const chapters = chaptersRepository.findByName(name)

    return chapters
  }
}

export default FindNameChapterService