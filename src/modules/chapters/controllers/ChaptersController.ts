import { instanceToInstance } from "class-transformer";
import { Request, Response } from "express";
import CreateChapterService from "../services/CreateChapterService";

export default class ChaptersRepository {
  
  public async create(request: Request, response: Response): Promise<Response> {
    const { name } = request.body

    const createChapter = new CreateChapterService()

    const chapter = await createChapter.execute({
      name
    })

    return response.json(instanceToInstance(chapter))
  }
}