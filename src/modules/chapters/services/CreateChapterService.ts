import AppError from "@shared/errors/AppError";
import { getCustomRepository } from "typeorm";
import { IChapter } from "../models/IChapter";
import { ICreateChapter } from "../models/ICreateChapter";
import ChaptersRepository from "../repositories/ChapterRepository";

class CreateChapterService {
  public async execute({name}: ICreateChapter): Promise<IChapter> {
    const chaptersRepository = getCustomRepository(ChaptersRepository)

    const chapterExists = await chaptersRepository.findByExactName(name);

    if (chapterExists) {
      throw new AppError('Name book already used');
    }

    const chapter = await chaptersRepository.create({
      name
    })

    await chaptersRepository.save(chapter)

    return chapter
  }
}

export default CreateChapterService