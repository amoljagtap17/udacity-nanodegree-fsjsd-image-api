import { resizeImage } from '../utils'

describe('Validate image resizing', async () => {
  it('gets error thrown for passing incorrect filename', async () => {
    const { info, error } = await resizeImage({
      filename: 'fjord2',
      width: '350',
      height: '200',
    })

    expect(info).toEqual({})
    expect(error).toEqual('Error encountered during file read.')
  })

  it('gets error thrown for passing alphabets for height value', async () => {
    const { info, error } = await resizeImage({
      filename: 'fjord',
      width: '350',
      height: 'abc',
    })

    expect(info).toEqual({})
    expect(error).toEqual('Error encountered during image resizing.')
  })

  it('gets no error thrown for passing correct values', async () => {
    const { info, error } = await resizeImage({
      filename: 'fjord',
      width: '350',
      height: '200',
    })

    expect(info.format).toBe('jpeg')
    expect(info.width).toBe(350)
    expect(info.height).toBe(200)

    expect(error).toEqual('')
  })
})
