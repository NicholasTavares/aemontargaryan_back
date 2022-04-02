import { instanceToInstance } from "class-transformer"
import { Request, Response } from "express"
import CreateBookService from "../services/CreateBookService"
import ListBooksService from "../services/ListBooksService"

export default class BooksController {
  public async create(request: Request, response: Response): Promise<Response> {
    const { name } = request.body

    const createBook = new CreateBookService()

    const book = await createBook.execute({
      name
    })

    return response.json(instanceToInstance(book))
  }

  public async list(request: Request, response: Response): Promise<Response> {
    const listBooks = new ListBooksService()

    const books = await listBooks.execute()

    return response.json(instanceToInstance(books))
  }
}