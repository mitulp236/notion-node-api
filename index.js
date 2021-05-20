const express = require('express')
const getData = require('./services/notion')
const PORT = process.env.PORT || 5000

const app = express()

app.use(express.static('public'))

app.get('/data', async (req, res) => {
  const data = await getData()
  res.json(data)
})

app.listen(PORT, console.log(`Server started on port ${PORT}`))