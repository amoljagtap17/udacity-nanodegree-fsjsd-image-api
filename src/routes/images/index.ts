import express from 'express'
import { promises as fs } from 'fs'
import {
  imageParamsValidator,
  imageExistsValidator,
  resizeImage,
} from '../../middlewares'

const imagesRoutes = express.Router()

const middlewares = [imageParamsValidator, imageExistsValidator, resizeImage]

imagesRoutes.get(
  '/',
  middlewares,
  async (req: express.Request, res: express.Response) => {
    const { filename, width, height } = req.query
    const resizedImgPath = `src/assets/thumbs/${filename}_${width}_${height}.jpg`

    try {
      const resizedImage = await fs.readFile(resizedImgPath)

      res.type('jpg')

      res.send(resizedImage)
    } catch (error) {
      res.status(500).send({
        errors: [
          {
            message: 'Server Error',
            description: 'Error encountered during reading resized image.',
          },
        ],
      })

      return
    }
  }
)

export { imagesRoutes }
