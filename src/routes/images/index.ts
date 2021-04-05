import express from 'express'
import { promises as fs } from 'fs'
import {
  imageParamsValidator,
  imageExistsValidator,
  resizeImage,
  resizedImageCache,
} from '../../middlewares'
import { IQueryParams } from '../../types'

const imagesRoutes = express.Router()

// Call the following middlewares in sequence
// 1. imageParamsValidator - Check if the required 'filename', 'height', 'width' query params are passed in the URL or not.
// 2. imageExistsValidator - Check if the image to resize exists.
// 3. resizedImageCache - Check if the resized image exists in the 'thumbs' folder. If one exists serve that.
// 4. resizeImage - If resized image does not exists call the middleware to resize the image.
const middlewares = [
  imageParamsValidator,
  imageExistsValidator,
  resizedImageCache,
  resizeImage,
]

// 5. Serve the resized image from the 'thumbs' folder using the below route.
imagesRoutes.get(
  '/',
  middlewares,
  async (req: express.Request, res: express.Response) => {
    const { filename, width, height } = (req.query as unknown) as IQueryParams
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
