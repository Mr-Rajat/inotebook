// import connectToMongo from './db';

require('./db').connect()

const express = require('express')
const app = express()
const port = 5000


app.use(express.json())
// Available Routes
app.use('/api/auth',require('./routes/auth'))
app.use('/api/notes',require('./routes/notes'))

app.get('/', (req, res) => {
  res.send('Hello Rajat!')
})

app.listen(port, () => {
  console.log(`Notebook backend listening on port ${port}`)
})

// client.connect()
