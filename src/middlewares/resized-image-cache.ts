import express from 'express'
import { promises as fs } from 'fs'
import { IQueryParams } from '../types'

export const resizedImageCache = async (
  req: express.Request,
  res: express.Response,
  next: express.NextFunction
): Promise<void> => {
  const { filename, width, height } = (req.query as unknown) as IQueryParams
  const resizedImgPath = `src/assets/thumbs/${filename}_${width}_${height}.jpg`

  try {
    await fs.access(resizedImgPath)
  } catch (error) {
    console.log('Resized Image not found!')

    next()

    return
  }

  const resizedImage = await fs.readFile(resizedImgPath)

  res.type('jpg')

  res.send(resizedImage)
}
