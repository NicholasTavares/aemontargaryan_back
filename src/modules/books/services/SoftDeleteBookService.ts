import { getCustomRepository } from "typeorm"
import BooksRepository from "../repositories/BooksRepository"

class SoftDeleteBookService {
  public async execute(id: string) {
    const booksRepository = getCustomRepository(BooksRepository)

    await booksRepository.softDelete(id)
  }
}

export default SoftDeleteBookService