import express from 'express'

const imagesRoutes = express.Router()

imagesRoutes.get('/', (req, res) => {
  res.send('Images Route...')
})

export { imagesRoutes }
