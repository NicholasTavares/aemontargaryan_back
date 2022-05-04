import { EntityRepository, getRepository, Repository } from "typeorm";
import { ICreateComment } from "../models/ICreateComment";
import { IComment } from "../models/IComment";
import Comment from "../entities/Comment";

@EntityRepository(Comment)
export default class CommentsRepository {
  private ormRepository: Repository<Comment>

  constructor() {
    this.ormRepository = getRepository(Comment);
  }

  public async create({ id_theory, id_user, comment }: ICreateComment): Promise<IComment> {
    const commentCreated = this.ormRepository.create({
      id_theory,
      id_user,
      comment
    })

    return commentCreated
  }

  public async save(comment: IComment): Promise<IComment> {
    return this.ormRepository.save(comment)
  }
}