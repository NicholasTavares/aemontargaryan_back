import { Router } from 'express';
import { celebrate, Joi, Segments } from "celebrate";
import isAuthenticated from '@shared/middlewares/isAuthenticated';
import BooksController from '../controllers/BooksController';

const booksRouter = Router()
const booksController = new BooksController()

booksRouter.get(
  '/', isAuthenticated,
  booksController.list
)

booksRouter.post(
  '/', isAuthenticated,
  celebrate({
    [Segments.BODY]: {
      name: Joi.string().required(),
    }
  }),
  booksController.create
)

booksRouter.get(
  '/name', isAuthenticated,
  celebrate({
    [Segments.BODY]: {
      name: Joi.string().required(),
    }
  }),
  booksController.findName
)

booksRouter.get(
  '/:id', isAuthenticated,
  celebrate({
    [Segments.PARAMS]: {
      id: Joi.string().required(),
    }
  }),
  booksController.show
)

booksRouter.patch(
  '/:id', isAuthenticated,
  celebrate({
    [Segments.PARAMS]: {
      id: Joi.string().required(),
    }
  }),
  celebrate({
    [Segments.BODY]: {
      name: Joi.string().required(),
    }
  }),
  booksController.update
)

booksRouter.delete(
  '/:id', isAuthenticated,
  celebrate({
    [Segments.PARAMS]: {
      id: Joi.string().required(),
    }
  }),
  booksController.softDelete
)

export default booksRouter