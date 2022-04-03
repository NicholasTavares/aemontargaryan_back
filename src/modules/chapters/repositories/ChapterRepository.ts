import { EntityRepository, getRepository, Repository } from "typeorm";
import Chapter from "../entities/Chapter";
import { IListChapters } from "../models/IListChapters";

@EntityRepository(Chapter)
export default class ChapterRepository {

  private ormRepository: Repository<Chapter>

  constructor() {
    this.ormRepository = getRepository(Chapter)
  }

  public async findAll(): Promise<IListChapters> {
    const chapters = await this.ormRepository.find()

    return {
      chapters,
      count: chapters.length
    }
  }

}