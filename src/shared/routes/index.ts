import booksRouter from '@modules/books/routes/books.routes'
import chaptersRouter from '@modules/chapters/routes/chapters.routes'
import rolesRouter from '@modules/roles/routes/roles.routes'
import usersRouter from '@modules/users/routes/users.routes'
import { Router } from 'express'

const routes = Router()

routes.use('/users', usersRouter)
routes.use('/books', booksRouter)
routes.use('/chapters', chaptersRouter)
routes.use('/roles', rolesRouter)

export default routes