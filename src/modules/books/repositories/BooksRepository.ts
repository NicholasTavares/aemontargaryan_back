import Book from "../entities/Book";
import { EntityRepository, getRepository, Like, Repository } from "typeorm";
import { IBook } from "../models/IBook";
import { ICreateBook } from "../models/ICreateBook";
import { IListBooks } from "../models/IListBooks";

@EntityRepository(Book)
export default class BooksRepository {

  private ormRepository: Repository<Book>

  constructor() {
    this.ormRepository = getRepository(Book)
  }

  public async findAll(): Promise<IListBooks> {
    const books = await this.ormRepository.find()

    return {
      books,
      count: books.length
    }
  }

  public async findById(id: string): Promise<IBook | undefined> {
    const book = await this.ormRepository.findOne(id)

    return book
  }

  public async findByName(name: string): Promise<IBook[]> {
    const book = await this.ormRepository.find({
      where: {
        name: Like(`%${name}%`),
      }
    })

    return book
  }

  public async findByExactName(name: string): Promise<IBook | undefined> {
    const book = await this.ormRepository.findOne({
      where: {
        name
      }
    })

    return book
  }

  public async create({ name }: ICreateBook): Promise<IBook> {
    const book = this.ormRepository.create({
      name
    })

    return book
  }

  public async save(book: IBook): Promise<IBook> {
    const bookSaved = await this.ormRepository.save(book)

    return bookSaved
  }

  public async softDelete(id: string){
    return this.ormRepository.softDelete(id)
  }

}