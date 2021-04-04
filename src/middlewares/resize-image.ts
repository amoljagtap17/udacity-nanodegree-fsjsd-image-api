import express from 'express'
import sharp from 'sharp'
import { promises as fs } from 'fs'
import { IQueryParams } from '../types'

export const resizeImage = async (
  req: express.Request,
  res: express.Response,
  next: express.NextFunction
): Promise<void> => {
  const { filename, width, height } = (req.query as unknown) as IQueryParams
  const resizedImgPath = `src/assets/thumbs/${filename}_${width}_${height}.jpg`

  try {
    const originalImage = await fs.readFile(`src/assets/images/${filename}.jpg`)

    await sharp(originalImage)
      .resize({
        width: Number(width),
        height: Number(height),
        fit: sharp.fit.cover,
        position: sharp.strategy.entropy,
      })
      .toFile(resizedImgPath)
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

  next()
}
