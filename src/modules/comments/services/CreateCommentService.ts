import { getCustomRepository } from "typeorm";
import { IComment } from "../models/IComment";
import { ICreateComment } from "../models/ICreateComment";
import CommentsRepository from "../repositories/CommentsRepository";

class CreateCommentService {
  public async execute({id_theory, id_user, comment}: ICreateComment): Promise<IComment> {
    const commentsRepositoy = getCustomRepository(CommentsRepository)

    const commentCreated = await commentsRepositoy.create({
      id_theory,
      id_user,
      comment
    })

    await commentsRepositoy.save(commentCreated)

    return commentCreated
  }
}

export default CreateCommentService