import express from 'express'
import { imagesRoutes } from './images'

const routes = express.Router()

routes.use('/images', imagesRoutes)

export { routes }
