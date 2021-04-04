import express from 'express'
import sharp from 'sharp'
import { promises as fs } from 'fs'
import { imageParamsValidator, imageExistsValidator } from '../../middlewares'

const imagesRoutes = express.Router()

const middlewares = [imageParamsValidator, imageExistsValidator]

imagesRoutes.get(
  '/',
  middlewares,
  async (req: express.Request, res: express.Response) => {
    const { filename, width, height } = req.query
    const resizedImgPath = `src/assets/thumbs/${filename}_${width}_${height}.jpg`

    try {
      const originalImage = await fs.readFile(
        `src/assets/images/${filename}.jpg`
      )

      await sharp(originalImage)
        .resize({
          width: Number(width),
          height: Number(height),
          fit: sharp.fit.cover,
          position: sharp.strategy.entropy,
        })
        .toFile(resizedImgPath)

      const resizedImage = await fs.readFile(resizedImgPath)

      res.type('jpg')

      res.send(resizedImage)
    } catch (error) {
      res.status(500).send({
        errors: [
          {
            message: 'Server Error',
            description: 'Error encountered during image resizing.',
          },
        ],
      })

      return
    }
  }
)

export { imagesRoutes }
