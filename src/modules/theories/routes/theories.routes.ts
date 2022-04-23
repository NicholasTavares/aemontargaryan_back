import { Router } from 'express';
import { celebrate, Joi, Segments } from "celebrate";
import TheoriesController from '../controllers/TheoriesController';
import isAuthenticated from '@shared/middlewares/isAuthenticated';

const theoriesRouter = Router()
const theoriesController = new TheoriesController()

theoriesRouter.post(
  '/', isAuthenticated,
  celebrate({
    [Segments.BODY]: {
      title: Joi.string().required(),
      theory: Joi.string().required(),
    }
  }),
  theoriesController.create
)

theoriesRouter.get(
  '/', isAuthenticated,
  theoriesController.list
)

theoriesRouter.get(
  '/:id', isAuthenticated,
  celebrate({
    [Segments.PARAMS]: {
      id: Joi.string().required(),
    }
  }),
  theoriesController.show
)

theoriesRouter.delete(
  '/:id', isAuthenticated,
  celebrate({
    [Segments.PARAMS]: {
      id: Joi.string().required(),
    }
  }),
  theoriesController.softDelete
)

export default theoriesRouter