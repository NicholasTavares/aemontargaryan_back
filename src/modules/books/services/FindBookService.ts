import AppError from "@shared/errors/AppError";
import { getCustomRepository } from "typeorm";
import { IBook } from "../models/IBook";
import BooksRepository from "../repositories/BooksRepository";

class FindBookService {
  public async execute (id: string): Promise<IBook | undefined> {
    const booksRepository = getCustomRepository(BooksRepository);

    const book = await booksRepository.findById(id)

    if (!book) {
      throw new AppError('Book not found')
    }

    return book
  }
}

export default FindBookService