import Role from "../entities/Role";
import { EntityRepository, getRepository, Like, Repository } from "typeorm";
import { IRole } from "../models/IRole";
import { IListRoles } from "../models/IListRoles";
import AppError from "@shared/errors/AppError";
import { IFindById } from "../models/IFindById";
import { ISoftDelete } from "../models/ISoftDelete";
import { IFindByName } from "../models/IFindByName";
import { ICreateRole } from "../models/ICreateRole";
import { IFindByExactName } from "../models/IFindByExactName";

@EntityRepository(Role)
export default class RolesRepository {

  private ormRepository: Repository<Role>

  constructor() {
    this.ormRepository = getRepository(Role);
  }

  public async findAll(): Promise<IListRoles> {
    const roles = await this.ormRepository.find()

    return {
      roles,
      count: roles.length
    }
  }

  public async findById({ id }: IFindById): Promise<IRole> {
    const role = await this.ormRepository.findOne(id)

    if (!role) {
      throw new AppError('Role not found')
    }

    return role
  }

  public async findByExactName({name}: IFindByExactName): Promise<IRole | undefined> {
    const role = await this.ormRepository.findOne({
      where: {
        name
      }
    })

    return role
  }

  public async findByName({ name }: IFindByName): Promise<IRole[]> {
    const user = await this.ormRepository.find({
      where: {
        name: Like(`%${name}%`),
      }
    })

    return user
  }

  public async create({ name }: ICreateRole): Promise<IRole> {
    const user = this.ormRepository.create({
      name
    })

    return user
  }

  public async save(role: IRole): Promise<IRole> {
    const userSaved = await this.ormRepository.save(role)

    return userSaved
  }

  public async softDelete({ id }: ISoftDelete) {
    const role = await this.findById({
      id
    })

    if (!role) {
      throw new AppError('Role not found')
    }

    return this.ormRepository.softDelete(id)
  }
}