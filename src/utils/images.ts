import { promises as fs } from 'fs'
import sharp from 'sharp'
import { IQueryParams, IImageInfo } from '../types'

// Util function to resize the image using 'sharp' npm package.
export const resizeImage = async (params: IQueryParams) => {
  const { filename, width, height } = params
  const resizedImgPath = `src/assets/thumbs/${filename}_${width}_${height}.jpg`
  let error = ''
  let info: IImageInfo = {}
  let originalImage

  try {
    originalImage = await getImage(`src/assets/images/${filename}.jpg`)
  } catch (err) {
    error = err.message
  }

  if (!error) {
    try {
      info = await sharp(originalImage)
        .resize({
          width: Number(width),
          height: Number(height),
          fit: sharp.fit.cover,
          position: sharp.strategy.entropy,
        })
        .toFile(resizedImgPath)
    } catch (err) {
      error = 'Error encountered during image resizing.'
    }
  }

  return { info, error }
}

export const getImage = async (filename: string) => {
  try {
    const image = await fs.readFile(filename)

    return image
  } catch (error) {
    throw new Error('Error encountered during file read.')
  }
}
