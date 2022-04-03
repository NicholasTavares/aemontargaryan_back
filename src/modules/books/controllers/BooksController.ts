import { instanceToInstance } from "class-transformer"
import { Request, Response } from "express"
import CreateBookService from "../services/CreateBookService"
import FindBookService from "../services/FindBookService"
import ListBooksService from "../services/ListBooksService"
import UpdateBookService from "../services/UpdateBookService"

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

  public async show(request: Request, response: Response): Promise<Response> {
    const { id } = request.body

    const showBook = new FindBookService()

    const book = await showBook.execute(id)

    return response.json(instanceToInstance(book))
  }

  public async update(request: Request, response: Response): Promise<Response> {
    const { id } = request.params
    const { name } = request.body

    const updateBook = new UpdateBookService()

    const book = await updateBook.execute({
      id,
      name
    })

    return response.json(instanceToInstance(book))
  }
}