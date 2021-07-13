const express = require('express')
const app = express()

const cors = require('cors')
const mongoose = require('mongoose')

require('dotenv').config()
const PORT = process.env.PORT || 3001
const MONGO_CONNECTION = process.env.MONGO_CONNECTION


//DATABASE CONNECTION
mongoose.connect(`${MONGO_CONNECTION}`, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
  .then(() => console.log('Database is connected.'))
  .catch(err => console.log(err))


//MIDDLEWARES
app.use(express.urlencoded({ extended: false }))
app.use(express.json())
app.use(cors({
  origin: 'http://localhost:3000',
  credentials: true
}))


//ROUTES
const dogRoutes = require('./routes/dogRoutes')

app.use('/dog', dogRoutes)


//LISTEN
app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`)
})