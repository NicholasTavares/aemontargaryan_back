import AppError from '@shared/errors/AppError';
import { getCustomRepository } from 'typeorm';
import { ICreateBook } from '../models/ICreateBook';
import { IBook, } from '../models/IBook';
import BooksRepository from '../repositories/BooksRepository';

class CreateBookService {
  public async execute({ name }: ICreateBook): Promise<IBook> {
    const booksRepository = getCustomRepository(BooksRepository);
    
    const bookExists = await booksRepository.findByName(name);

    if (bookExists) {
      throw new AppError('Name book already used');
    }

    const book = await booksRepository.create({
      name
    })

    await booksRepository.save(book)

    return book
  }
}

export default CreateBookService