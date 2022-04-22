import { instanceToInstance } from "class-transformer";
import { Request, Response } from "express";
import CreateTheoryService from "../services/CreateTheoryService";

export default class TheoriesController {

  public async create(request: Request, response: Response): Promise<Response> {
    const { title, theory } = request.body

    const createTheory = new CreateTheoryService()

    const theoryCreated = await createTheory.execute({
      title,
      theory,
      id_user: request.user.id
    })

    return response.json(instanceToInstance(theoryCreated))
  }
}