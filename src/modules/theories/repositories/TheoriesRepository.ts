import AppError from "@shared/errors/AppError";
import { EntityRepository, getRepository, Like, Repository } from "typeorm";
import Theory from "../entities/Theory";
import { ICreateTheory } from "../models/ICreateTheory";
import { IFindById } from "../models/IFindById";
import { IFindByTitle } from "../models/IFindByTitle";
import { IListTheories } from "../models/IListTheories";
import { ISoftDelete } from "../models/ISoftDelete";
import { ITheory } from "../models/ITheory";

@EntityRepository(Theory)
export default class TheoriesRepository {
  private ormRepository: Repository<Theory>

  constructor() {
    this.ormRepository = getRepository(Theory);
  }

  public async create({ theory, title, id_user }: ICreateTheory): Promise<ITheory> {
    const theoryCreated = this.ormRepository.create({
      title,
      id_user,
      theory_text: {
        theory,
      }
    })

    return theoryCreated
  }

  public async findAll(): Promise<IListTheories> {
    const theories = await this.ormRepository.find()

    return {
      theories,
      count: theories.length
    }
  }

  public async findByTitle({ title }: IFindByTitle): Promise<ITheory[]> {
    const theory = await this.ormRepository.find({
      where: {
        title: Like(`%${title}%`),
      }
    })

    return theory
  }

  public async findById({ id }: IFindById): Promise<ITheory> {
    const theory = await this.ormRepository.findOne(id, {
      relations: ['theory_text']
    })

    if (!theory) {
      throw new AppError('Theory not found')
    }

    return theory
  }

  public async save(theory: ITheory): Promise<ITheory> {
    const theorySaved = await this.ormRepository.save(theory)

    return theorySaved
  }

  public async softDelete({ id }: ISoftDelete) {
    const theory = await this.findById({
      id
    })

    return this.ormRepository.softRemove(theory)
  }
}