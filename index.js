const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const app = express()

app.use(cors())
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))

try {
  app.get('/', (req, res) => {
    res.send('Hello World!')
  })

  app.get('/api/restaurant/:id', require('./api/restaurant/get'))
  app.get('/api/restaurant/:id/queue', require('./api/restaurant/queue'))
  app.post('/api/restaurant/add', require('./api/restaurant/add'))

  app.get('/api/queue/:id', require('./api/queue/get'))
  app.get('/api/queue/del/:id', require('./api/queue/del'))
  app.post('/api/queue/add', require('./api/queue/add'))
} catch (e) {
  console.log(e)
}

app.listen(3001, () => {
  console.log('Example app listening on port 3001!')
})
