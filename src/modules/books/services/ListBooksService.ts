import { getCustomRepository } from "typeorm";
import { IListBooks } from "../models/IListBooks";
import BooksRepository from "../repositories/BooksRepository";

class ListBooksService {
  public async execute(): Promise<IListBooks> {
    const booksRepository = getCustomRepository(BooksRepository);

    const books = await booksRepository.findAll()

    return books
  }
}

export default ListBooksService