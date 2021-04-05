import express from 'express'
import { promises as fs } from 'fs'
import { routes } from './routes'

export const app = express()

const PORT = 8000

const createThumbsDirectory = async () => {
  await fs.mkdir('src/assets/thumbs', { recursive: true })
}

createThumbsDirectory()

app.use(express.urlencoded({ extended: false }))

app.use('/api', routes)

app.listen(PORT, () => {
  console.log(`Express application stated on http://localhost:${PORT}`)
})
