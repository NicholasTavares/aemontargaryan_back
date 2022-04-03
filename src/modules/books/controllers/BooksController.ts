import { instanceToInstance } from "class-transformer"
import { Request, Response } from "express"
import CreateBookService from "../services/CreateBookService"
import FindBookService from "../services/FindBookService"
import FindNameBookService from "../services/FindNameBookService"
import ListBooksService from "../services/ListBooksService"
import SoftDeleteBookService from "../services/SoftDeleteBookService"
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
    const { id } = request.params

    const showBook = new FindBookService()

    const book = await showBook.execute(id)

    return response.json(instanceToInstance(book))
  }

  public async findName(request: Request, response: Response): Promise<Response> {
    const { name } = request.body

    const findNameBooks = new FindNameBookService()

    const books = await findNameBooks.execute(name)

    return response.json(instanceToInstance(books))
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

  public async softDelete(request: Request, response: Response): Promise<Response> {
    const { id } = request.params

    const softDeleteBook = new SoftDeleteBookService()

    await softDeleteBook.execute(id)

    return response.json([])
  }
}