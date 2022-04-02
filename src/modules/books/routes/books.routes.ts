import { Router } from 'express';
import { celebrate, Joi, Segments } from "celebrate";
import isAuthenticated from '@shared/middlewares/isAuthenticated';
import BooksController from '../controllers/BooksController';

const booksRouter = Router()
const booksController = new BooksController()

booksRouter.post(
  '/', isAuthenticated,
  celebrate({
    [Segments.BODY]: {
      name: Joi.string().required(),
    }
  }),
  booksController.create
)

export default booksRouter