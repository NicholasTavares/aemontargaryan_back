import Book from "../entities/Book";
import { EntityRepository, getRepository, Repository } from "typeorm";
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

  public async create({ name }: ICreateBook): Promise<IBook> {
    const book = this.ormRepository.create({
      name
    })

    return book
  }

}