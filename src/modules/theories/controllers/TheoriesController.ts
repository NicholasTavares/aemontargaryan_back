import { instanceToInstance } from "class-transformer";
import { Request, Response } from "express";
import CreateTheoryService from "../services/CreateTheoryService";
import ListTheoriesService from "../services/ListTheoriesServices";
import SoftDeleteTheoryService from "../services/SoftDeleteTheoryService";

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

  public async list(request: Request, response: Response): Promise<Response> {
    const listTheories = new ListTheoriesService()

    const theories = await listTheories.execute()

    return response.json(instanceToInstance(theories))
  }

  public async softDelete(request: Request, response: Response): Promise<Response> {
    const { id } = request.params

    const softDeleteTheory = new SoftDeleteTheoryService()

    await softDeleteTheory.execute({
      id
    })

    return response.json(instanceToInstance(true))
  }
}