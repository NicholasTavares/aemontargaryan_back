import { instanceToInstance } from "class-transformer";
import { Request, Response } from "express";
import CreateChapterService from "../services/CreateChapterService";
import FindChapterService from "../services/FindChapterService";

export default class ChaptersRepository {
  
  public async create(request: Request, response: Response): Promise<Response> {
    const { name } = request.body

    const createChapter = new CreateChapterService()

    const chapter = await createChapter.execute({
      name
    })

    return response.json(instanceToInstance(chapter))
  }

  public async show(request: Request, response: Response): Promise<Response> {
    const { id } = request.params

    const showChapter = new FindChapterService()

    const chapter = await showChapter.execute(id)

    return response.json(instanceToInstance(chapter))
  }
}