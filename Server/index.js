const express = require('express')
const path = require('path')

const app = express()
const port = 3000
const Public = path.join(__dirname, '../Client/Public')

app.use(express.static(Public))
app.use(express.json())

app.listen(port, () => {
  console.log(`listening at http://localhost:${port}`)
})