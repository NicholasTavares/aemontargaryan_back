import booksRouter from '@modules/books/routes/books.routes'
import chaptersRouter from '@modules/chapters/routes/chapters.routes'
import commentsRouter from '@modules/comments/routes/comments.routes'
import rolesRouter from '@modules/roles/routes/roles.routes'
import theoriesRouter from '@modules/theories/routes/theories.routes'
import usersRouter from '@modules/users/routes/users.routes'
import { celebrate, Joi, Segments } from 'celebrate'
import { Router } from 'express'

const routes = Router()

routes.use('/users', usersRouter)
routes.use('/books', booksRouter)
routes.use('/chapters', chaptersRouter)
routes.use('/roles', rolesRouter)
routes.use('/theories', theoriesRouter)
routes.use('/theories/:id_theory/comments', celebrate({
  [Segments.PARAMS]: {
    id_theory: Joi.string().required(),
  },
}), commentsRouter)

export default routes