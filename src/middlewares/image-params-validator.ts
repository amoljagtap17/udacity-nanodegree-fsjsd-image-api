import express from 'express'

export const imageParamsValidator = (
  req: express.Request,
  res: express.Response,
  next: express.NextFunction
): void => {
  const params = req.query
  console.log('params : ', params)

  next()
}
