import isAuthenticated from "@shared/middlewares/isAuthenticated";
import { celebrate, Joi, Segments } from "celebrate";
import { Router } from "express";
import CommentsController from "../controllers/CommentsController";

const commentsRouter = Router()
const commentsController = new CommentsController()

commentsRouter.post(
  '/', isAuthenticated,
  celebrate({
    [Segments.BODY]: {
      comment: Joi.string().required(),
    }
  }),
  commentsController.create
)

export default commentsRouter