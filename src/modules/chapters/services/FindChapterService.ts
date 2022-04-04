import { IBook } from "@modules/books/models/IBook";
import { getCustomRepository } from "typeorm";
import ChaptersRepository from "../repositories/ChapterRepository";

class FindChapterService {
  public async execute(id: string): Promise<IBook> {
    const chaptersRepository = getCustomRepository(ChaptersRepository)

    const chapter = chaptersRepository.findById(id)

    return chapter
  }
}

export default FindChapterService