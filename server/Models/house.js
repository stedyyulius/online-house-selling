const mongoose = require('mongoose')
const Schema = mongoose.Schema

var houseSchema = new Schema({
  name: String,
  latitude: Number,
  longitude: Number,
  price: String,
  image: String,
  createdAt: Date,
  description: String,
  owner: String,
  user_id: {type:Schema.Types.ObjectId, ref:'User'}
})

var House = mongoose.model('Houses',houseSchema)

module.exports = House