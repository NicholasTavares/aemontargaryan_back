import AppError from "@shared/errors/AppError";
import { getCustomRepository } from "typeorm";
import { IUpdateChapter } from "../models/IUpdateChapter";
import ChaptersRepository from "../repositories/ChapterRepository";

class UpdateChapterService {
  public async execute({ id, name }: IUpdateChapter) {
    const chaptersRepository = getCustomRepository(ChaptersRepository)

    const chapter = await chaptersRepository.findById(id)

    if (chapter.name === name) {
      return chapter
    }

    if (name) {
      const nameExists = await chaptersRepository.findByExactName(name)

      if (nameExists && name !== chapter.name) {
        throw new AppError('There is already one book with this name!')
      }
    }

    chapter.name = name

    await chaptersRepository.save(chapter)

    return chapter
  }
}

export default UpdateChapterService