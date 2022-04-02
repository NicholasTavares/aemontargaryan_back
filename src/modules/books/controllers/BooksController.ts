import { instanceToInstance } from "class-transformer"
import { Request, Response } from "express"
import CreateBookService from "../services/CreateBookService"

export default class BooksController {
  public async create(request: Request, response: Response): Promise<Response> {
    const { name } = request.body

    const createBook = new CreateBookService()

    const book = await createBook.execute({
      name
    })

    return response.json(instanceToInstance(book))
  }
}