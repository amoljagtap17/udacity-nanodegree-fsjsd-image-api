import express from 'express'
import fs from 'fs'
import { imageParamsValidator } from '../../middlewares'

const imagesRoutes = express.Router()

imagesRoutes.get('/', imageParamsValidator, (req, res) => {
  const file = 'src/assets/images/fjord.jpg'

  const img = fs.readFileSync(file)

  res.type('jpg')

  res.send(img)
})

export { imagesRoutes }
