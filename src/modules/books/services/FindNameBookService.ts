import { getCustomRepository } from "typeorm";
import { IBook } from "../models/IBook";
import BooksRepository from "../repositories/BooksRepository";

class FindNameBookService {
  public async execute(name: string): Promise<IBook[]> {
    const booksRepository = getCustomRepository(BooksRepository)

    const books = await booksRepository.findByName(name)

    return books
  }
}

export default FindNameBookService 