import { instanceToInstance } from "class-transformer";
import { Request, Response } from "express";
import CreateChapterService from "../services/CreateChapterService";
import FindChapterService from "../services/FindChapterService";
import FindNameChapterService from "../services/FindNameChapterService";
import ListChaptersService from "../services/ListChaptersService";
import SoftDeleteChapterService from "../services/SoftDeleteChapterService";
import UpdateChapterService from "../services/UpdateChapterService";

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

  public async list(request: Request, response: Response): Promise<Response> {
    const listChapters = new ListChaptersService()

    const chapters = await listChapters.execute()

    return response.json(instanceToInstance(chapters))
  }

  public async findName(request: Request, response: Response): Promise<Response> {
    const { name } = request.body

    const findNameChapter = new FindNameChapterService()

    const chapter = await findNameChapter.execute(name)

    return response.json(instanceToInstance(chapter))
  }

  public async update(request: Request, response: Response): Promise<Response> {
    const { id } = request.params
    const { name } = request.body

    const updateChapter = new UpdateChapterService()

    const chapter = await updateChapter.execute({
      id,
      name
    })

    return response.json(instanceToInstance(chapter))
  }

  public async softDelete(request: Request, response: Response): Promise<Response> {
    const { id } = request.params

    const softDeleteChapter = new SoftDeleteChapterService()

    await softDeleteChapter.execute(id)

    return response.json([])
  }
}