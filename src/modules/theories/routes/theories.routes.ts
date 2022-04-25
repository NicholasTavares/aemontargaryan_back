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
  '/title', isAuthenticated,
  celebrate({
    [Segments.BODY]: {
      title: Joi.string(),
    }
  }),
  theoriesController.findTitle
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

theoriesRouter.patch(
  '/:id', isAuthenticated,
  celebrate({
    [Segments.PARAMS]: {
      id: Joi.string().required(),
    }
  }),
  celebrate({
    [Segments.BODY]: {
      title: Joi.string(),
      theory_text: Joi.string(),
    }
  }),
  theoriesController.update
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