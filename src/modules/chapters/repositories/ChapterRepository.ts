import AppError from "@shared/errors/AppError";
import { EntityRepository, getRepository, Like, Repository } from "typeorm";
import Chapter from "../entities/Chapter";
import { IChapter } from "../models/IChapter";
import { ICreateChapter } from "../models/ICreateChapter";
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

  public async findById(id: string): Promise<IChapter | undefined> {
    const chapter = await this.ormRepository.findOne(id)

    if (!chapter) {
      throw new AppError('Chapter not found!')
    }

    return chapter
  }

  public async findByName(name: string): Promise<IChapter[]> {
    const chapter = await this.ormRepository.find({
      where: {
        name: Like(`%${name}%`)
      }
    })

    return chapter
  }

  public async findByExactName(name: string): Promise<IChapter | undefined> {
    const chapter = await this.ormRepository.findOne({
      where: {
        name
      }
    })

    if (!chapter) {
      throw new AppError('Chapter not found!')
    }

    return chapter
  }

  public async create({name}: ICreateChapter): Promise<IChapter> {
    const chapter = this.ormRepository.create({
      name
    })

    return chapter
  }

}