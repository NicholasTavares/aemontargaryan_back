import { Router } from 'express';
import { celebrate, Joi, Segments } from "celebrate";
import isAuthenticated from '@shared/middlewares/isAuthenticated';
import RolesController from '../controllers/RolesController';

const rolesRouter = Router()
const rolesController = new RolesController()

rolesRouter.post(
  '/', isAuthenticated,
  celebrate({
    [Segments.BODY]: {
      name: Joi.string().required()
    }
  }),
  rolesController.create
)

rolesRouter.get(
  '/', isAuthenticated, rolesController.list
)

rolesRouter.get(
  '/:id', isAuthenticated,
  celebrate({
    [Segments.PARAMS]: {
      id: Joi.string().required()
    }
  }),
  rolesController.show
)

rolesRouter.patch(
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
  rolesController.update
)

export default rolesRouter