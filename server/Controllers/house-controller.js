const Houses = require('../Models/house.js')

function createHouse (req,res,next){
  Houses.create({
    name: req.body.name,
    price: req.body.price,
    image: req.body.image,
    description: req.body.description,
    location: req.body.location,
    user_id: req.body.user_id
  })
}

function updateHouse (req,res,next){
  Houses.findOne({
    _id: req.params.id
  },function(err,result){
    Houses.updateOne({
      name: req.body.name || result.name,
      price: req.body.price || result.price,
      image: req.body.image || result.image,
      description: req.body.description || result.description,
      location: req.body.location || result.location
    })
  })
}

function listHouses (req,res,next){
  Houses.find({},function(err,result){
    res.send(result)
  })
}

function getOneHouse (req,res,next){
  Houses.findOne({
    _id: req.params.id
  },function(err,result){
    res.send(result)
  })
}

function deleteHouse (req,res,next){
  Houses.remove({
    _id: req.params.id
  },function(err,result){
    res.send(`Delete House Success!`)
  })
}

module.exports = {
  deleteHouse,getOneHouse,listHouses,updateHouse,createHouse
}
