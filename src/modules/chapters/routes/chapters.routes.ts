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

chaptersRouter.get(
  '/', isAuthenticated,
  chaptersController.list
)

chaptersRouter.get(
  '/name', isAuthenticated,
  celebrate({
    [Segments.BODY]: {
      name: Joi.string().required()
    }
  }),
  chaptersController.findName
)

chaptersRouter.get(
  '/:id', isAuthenticated,
  celebrate({
    [Segments.PARAMS]: {
      id: Joi.string().required()
    }
  }),
  chaptersController.show
)

chaptersRouter.patch(
  '/:id', isAuthenticated,
  celebrate({
    [Segments.PARAMS]: {
      id: Joi.string().required()
    }
  }),
  celebrate({
    [Segments.BODY]: {
      name: Joi.string().required()
    }
  }),
  chaptersController.update
)

chaptersRouter.delete(
  '/:id', isAuthenticated,
  celebrate({
    [Segments.PARAMS]: {
      id: Joi.string().required()
    }
  }),
  chaptersController.softDelete
)

export default chaptersRouter