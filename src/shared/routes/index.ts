import booksRouter from '@modules/books/routes/books.routes'
import chaptersRouter from '@modules/chapters/routes/chapters.routes'
import tagsRoutes from '@modules/tags/routes/tags.routes'
import usersRouter from '@modules/users/routes/users.routes'
import { Router } from 'express'

const routes = Router()

routes.use('/users', usersRouter)
routes.use('/books', booksRouter)
routes.use('/chapters', chaptersRouter)
routes.use('/tags', tagsRoutes)

export default routes