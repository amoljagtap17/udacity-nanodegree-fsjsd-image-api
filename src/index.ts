import express from 'express'

const app = express()

const PORT = 8000

app.get('/', (req, res) => {
  res.send('Hey there Express!!')
})

app.listen(PORT, () => {
  console.log(`Express application stated on http://localhost:${PORT}`)
})
