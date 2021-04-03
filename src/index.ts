import express from 'express'
import { routes } from './routes'

const app = express()

const PORT = 8000

app.use('/api', routes)

app.listen(PORT, () => {
  console.log(`Express application stated on http://localhost:${PORT}`)
})
