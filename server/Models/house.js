const mongoose = require('mongoose')
const Schema = mongoose.Schema

var houseSchema = new Schema({
  name: String,
  location: {String},
  price: Number,
  image: String,
  createdAt: Date,
  description: String,
  user_id: {type:Schema.Types.ObjectId, ref:'User'}
})

var House = mongoose.model('Houses',houseSchema)

module.exports = House