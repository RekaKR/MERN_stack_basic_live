const mongoose = require('mongoose')

const dogSchema = mongoose.Schema({
  dog: String,
  dogSec: {
    type: String,
    required: true
  }
})

module.exports = mongoose.model('Dog', dogSchema)