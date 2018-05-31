const express = require('express')
const bodyParser = require('body-parser')
const api = require('./api')
const app = express()

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/api/restaurant/:id', api.restaurant.get)
app.get('/api/restaurant/:id/queue', api.restaurant.queue)
app.post('/api/restaurant/add', api.restaurant.add)

app.get('/api/queue/:id', api.queue.get)
app.get('/api/queue/del/:id', api.queue.del)
app.post('/api/queue/add', api.queue.add)

app.listen(3000, () => {
  console.log('Example app listening on port 3000!')
})

