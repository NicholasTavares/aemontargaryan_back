import { instanceToInstance } from "class-transformer"
import { Request, Response } from "express"
import CreateCommentService from "../services/CreateCommentService"

export default class CommentsController {
  public async create(request: Request, response: Response): Promise<Response> {
    const { id_theory } = request.params
    const { comment } = request.body

    const createComment = new CreateCommentService()

    const commentCreated = await createComment.execute({
      id_theory,
      id_user: request.user.id,
      comment,
    })

    return response.json(instanceToInstance(commentCreated))
  }
}