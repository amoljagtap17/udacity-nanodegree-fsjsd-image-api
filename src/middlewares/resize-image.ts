import express from 'express'
import { IQueryParams } from '../types'
import { resizeImage as resizeImageUtil } from '../utils'

export const resizeImage = async (
  req: express.Request,
  res: express.Response,
  next: express.NextFunction
): Promise<void> => {
  const { filename, width, height } = (req.query as unknown) as IQueryParams

  try {
    const { error } = await resizeImageUtil({ filename, width, height })

    if (error) {
      throw new Error(error)
    }
  } catch (error) {
    res.status(500).send({
      errors: [
        {
          message: 'Server Error',
          description: error,
        },
      ],
    })

    return
  }

  console.log('image is resized.')

  next()
}
