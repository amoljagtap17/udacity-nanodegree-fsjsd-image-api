import supertest from 'supertest'
import { app } from '../index'

const request = supertest(app)

describe('Test endpoint responses', () => {
  it('gets success response from the api endpoint for correct query params', async () => {
    const response = await request.get(
      '/api/images?filename=fjord&width=450&height=300'
    )

    expect(response.status).toBe(200)
  })

  it('gets error response from the api endpoint for incorrect query params', async () => {
    const response = await request.get(
      '/api/images?filename=fjord&width=450&height=30b'
    )

    expect(response.status).toBe(400)
  })
})
