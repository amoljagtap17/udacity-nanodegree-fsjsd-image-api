import express from 'express'
import { promises as fs } from 'fs'
import { IQueryParams } from '../types'

export const imageExistsValidator = async (
  req: express.Request,
  res: express.Response,
  next: express.NextFunction
): Promise<void> => {
  const { filename } = (req.query as unknown) as IQueryParams

  try {
    await fs.access(`src/assets/images/${filename}.jpg`)
  } catch (error) {
    res.status(400).send('Image not found for resizing.')

    return
  }

  next()
}
