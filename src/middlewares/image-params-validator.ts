import express from 'express'
import { IError, IQueryParams } from '../types'

export const imageParamsValidator = (
  req: express.Request,
  res: express.Response,
  next: express.NextFunction
): void => {
  const { filename, width, height } = (req.query as unknown) as IQueryParams

  const message = 'Bad Request'
  let description = ''
  const errors: IError[] = []

  if (!filename || !width || !height) {
    description = 'Required query params not passed.'

    errors.push({ message, description })
  }

  if (isNaN(Number(width)) || isNaN(Number(height))) {
    description = 'Required width and height params are not numeric.'

    errors.push({ message, description })
  }

  if (description.length > 0) {
    res.status(400).send({
      errors,
    })

    return
  }

  next()
}
