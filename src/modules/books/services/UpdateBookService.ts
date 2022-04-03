import AppError from "@shared/errors/AppError";
import { getCustomRepository } from "typeorm";
import { IBook } from "../models/IBook";
import { IUpdateBook } from "../models/IUpdateBook";
import BooksRepository from "../repositories/BooksRepository";

class UpdateBookService {
  public async execute({ id, name }: IUpdateBook): Promise<IBook | undefined> {
    const booksRepository = getCustomRepository(BooksRepository)

    const book = await booksRepository.findById(id)

    if (book.name === name) {
      return book
    }

    if (name) {
      const nameExists = await booksRepository.findByExactName(name)

      if (nameExists && name !== book.name) {
        throw new AppError('There is already one book with this name!')
      }
    }

    book.name = name

    await booksRepository.save(book)

    return book
  }
}

export default UpdateBookService