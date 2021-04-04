export interface IQueryParams {
  filename?: string
  width?: string
  height?: string
}

export interface IError {
  message: string
  description: string
}

export interface IImageInfo {
  format?: string
  width?: number
  height?: number
}
