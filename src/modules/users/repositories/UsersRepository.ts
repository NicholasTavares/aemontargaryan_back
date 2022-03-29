import User from "../entities/User";
import { EntityRepository, getRepository, Repository } from "typeorm";
import { IUser } from "../models/IUser";
import { ICreateUser } from "../models/ICreateUser";
import { IListUsers } from "../models/IListUsers";

@EntityRepository(User)
export default class UsersRepository{

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

  public async findById(id: string): Promise<IUser | undefined> {
    const user = await this.ormRepository.findOne(id)

    return user
  }

  public async findByEmail(email: string): Promise<IUser | undefined> {
    const user = await this.ormRepository.findOne({
      where: {
        email,
      }
    })

    return user
  }

  public async findByEmailForSession(email: string): Promise<IUser | undefined> {
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

  public async softDelete(id: string){
    return this.ormRepository.softDelete(id)
  }
}