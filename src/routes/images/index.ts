import express from 'express'
import { imageParamsValidator } from '../../middlewares'

const imagesRoutes = express.Router()

imagesRoutes.get('/', imageParamsValidator, (req, res) => {
  res.send('Images Route...')
})

export { imagesRoutes }
