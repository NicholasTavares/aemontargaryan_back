import AppError from "@shared/errors/AppError"
import { getCustomRepository } from "typeorm"
import BooksRepository from "../repositories/BooksRepository"

class SoftDeleteBookService {
  public async execute(id: string) {
    const booksRepository = getCustomRepository(BooksRepository)

    const book = await booksRepository.findById(id)

    if (!book) {
      throw new AppError('Book not found!')
    }

    await booksRepository.softDelete(id)
  }
}

export default SoftDeleteBookService