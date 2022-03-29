import { Router } from 'express';
import { celebrate, Joi, Segments } from "celebrate";
import UsersController from '../controllers/UsersController';

const usersRouter = Router()
const usersController = new UsersController()

usersRouter.post(
  '/',
  celebrate({
    [Segments.BODY]: {
      name: Joi.string().required(),
      email: Joi.string().email().required(),
      password: Joi.string().required(),
    }
  }),
  usersController.create
)

usersRouter.get(
  '/',
  usersController.list
)

usersRouter.get(
  '/:id',
  celebrate({
    [Segments.PARAMS]: {
      id: Joi.string().uuid().required(),
    }
  }),
  usersController.show
)

usersRouter.patch(
  '/:id',
  celebrate({
    [Segments.PARAMS]: {
      id: Joi.string().uuid().required(),
    },
    [Segments.BODY]: {
      name: Joi.string(),
      email: Joi.string().email(),
    }
  }),
  usersController.update
)

export default usersRouter