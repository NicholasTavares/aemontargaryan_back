import { Router } from 'express';
import { celebrate, Joi, Segments } from "celebrate";
import ChaptersController from '../controllers/ChaptersController';
import isAuthenticated from '@shared/middlewares/isAuthenticated';

const chaptersRouter = Router()
const chaptersController = new ChaptersController()

chaptersRouter.post(
  '/', isAuthenticated,
  celebrate({
    [Segments.BODY]: {
      name: Joi.string().required()
    }
  }),
  chaptersController.create
)

export default chaptersRouter