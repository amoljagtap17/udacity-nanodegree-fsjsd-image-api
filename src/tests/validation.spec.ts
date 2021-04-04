import {
  invalidParamsError,
  requiredParamsError,
  validateQueryParams,
} from '../utils'

describe('Validate request params', () => {
  it('gets error returned for string value for height', async () => {
    const errors = validateQueryParams({
      filename: 'fjord',
      width: '200',
      height: 'xyz',
    })

    expect(errors[0]).toBe(invalidParamsError)
  })

  it('gets error returned for not passing the width query param', async () => {
    const errors = validateQueryParams({
      filename: 'fjord',
      height: 'xyz',
    })

    expect(errors[0]).toBe(requiredParamsError)
  })

  it('gets no error returned for correct query param', async () => {
    const errors = validateQueryParams({
      filename: 'fjord',
      width: '400',
      height: '250',
    })

    expect(errors).toEqual([])
  })
})
