import { IError, IQueryParams } from '../types'

export const requiredParamsError: IError = {
  message: 'Bad Request',
  description: 'Required query params not passed.',
}

export const invalidParamsError: IError = {
  message: 'Bad Request',
  description: 'Required width and height params are not numeric.',
}

export const validateQueryParams = (params: IQueryParams): IError[] => {
  const { filename, width, height } = params

  const errors: IError[] = []

  if (!filename || !width || !height) {
    errors.push(requiredParamsError)
  } else if (
    (width && isNaN(Number(width))) ||
    (height && isNaN(Number(height)))
  ) {
    errors.push(invalidParamsError)
  }

  return errors
}
