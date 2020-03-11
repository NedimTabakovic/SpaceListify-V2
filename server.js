const express = require('express')
const app = express()
const routes = require('./routes/index')
const cors = require('cors')
const songModel = require('./models/Song')
app.use(express.urlencoded({ extended: true }))
app.use(express.json())

app.use(express.static(__dirname + '/client/build/'))

app.get('/', (req, res) => {
  // res.sendFile(__dirname + '/client/build/index.html')
  console.log(songModel)
  res.json ({test: true})
})
app.use(cors())
app.use('/', routes)

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
  console.log(`Server is listening on PORT: ${PORT}`)
})
