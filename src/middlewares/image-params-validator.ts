import express from 'express'
import { IQueryParams } from '../types'
import { validateQueryParams } from '../utils'

export const imageParamsValidator = (
  req: express.Request,
  res: express.Response,
  next: express.NextFunction
): void => {
  const { filename, width, height } = (req.query as unknown) as IQueryParams

  const errors = validateQueryParams({ filename, width, height })

  if (errors.length) {
    res.status(400).send({
      errors,
    })

    return
  }

  next()
}
