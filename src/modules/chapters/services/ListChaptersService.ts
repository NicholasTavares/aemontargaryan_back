import { getCustomRepository } from "typeorm";
import { IListChapters } from "../models/IListChapters";
import ChaptersRepository from "../repositories/ChapterRepository";

class ListChaptersService {
  public async execute(): Promise<IListChapters> {
    const chaptersRepository = getCustomRepository(ChaptersRepository)

    const chapters = chaptersRepository.findAll()

    return chapters
  }
}

export default ListChaptersService