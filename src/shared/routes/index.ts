import booksRouter from '@modules/books/routes/books.routes'
import usersRouter from '@modules/users/routes/users.routes'
import { Router } from 'express'

const routes = Router()

routes.use('/users', usersRouter)
routes.use('/books', booksRouter)

export default routes