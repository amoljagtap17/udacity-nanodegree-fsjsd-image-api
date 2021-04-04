import express from 'express'
import { promises as fs } from 'fs'
import { imageParamsValidator } from '../../middlewares'

const imagesRoutes = express.Router()

imagesRoutes.get('/', imageParamsValidator, async (req, res) => {
  const file = 'src/assets/images/fjord.jpg'

  // const img = fs.readFileSync(file)

  const img = await fs.readFile(file)

  res.type('jpg')

  res.send(img)
})

export { imagesRoutes }
