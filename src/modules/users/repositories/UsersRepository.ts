import User from "../entities/User";
import { EntityRepository, getRepository, Like, Repository } from "typeorm";
import { IUser } from "../models/IUser";
import { ICreateUser } from "../models/ICreateUser";
import { IListUsers } from "../models/IListUsers";
import AppError from "@shared/errors/AppError";
import { IFindById } from "../models/IFindById";
import { ISoftDelete } from "../models/ISoftDelete";
import { IFindByEmail } from "../models/IFindByEmail";
import { IFindByName } from "../models/IFindByName";
import { IFindByEmailForSession } from "../models/IFindByEmailForSession";

@EntityRepository(User)
export default class UsersRepository {

  private ormRepository: Repository<User>

  constructor() {
    this.ormRepository = getRepository(User);
  }

  public async findAll(): Promise<IListUsers | undefined> {
    const users = await this.ormRepository.find()

    return {
      users,
      count: users.length
    }
  }

  public async findById({ id }: IFindById): Promise<IUser> {
    const user = await this.ormRepository.findOne(id)

    if (!user) {
      throw new AppError('User not found')
    }

    return user
  }

  public async findByEmail({ email }: IFindByEmail): Promise<IUser | undefined> {
    const user = await this.ormRepository.findOne({
      where: {
        email,
      }
    })

    return user
  }

  public async findByName({ name }: IFindByName): Promise<IUser[]> {
    const user = await this.ormRepository.find({
      where: {
        name: Like(`%${name}%`),
      }
    })

    return user
  }

  public async findByEmailForSession({ email }: IFindByEmailForSession): Promise<IUser | undefined> {
    const user = await this.ormRepository.findOne({
      where: {
        email,
      },
      select: ['id', 'password']
    })

    return user
  }

  public async create({ name, email, password }: ICreateUser): Promise<IUser> {
    const user = this.ormRepository.create({
      name,
      email,
      password
    })

    return user
  }

  public async save(user: IUser): Promise<IUser> {
    const userSaved = await this.ormRepository.save(user)

    return userSaved
  }

  public async softDelete({ id }: ISoftDelete) {
    await this.findById({
      id
    })

    return this.ormRepository.softDelete(id)
  }
}