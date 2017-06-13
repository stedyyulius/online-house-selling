const Users = require('../Models/user.js')
const bcrypt = require('bcrypt')
const saltRounds = 10
const salt = bcrypt.genSaltSync(saltRounds)
require('dotenv').config()

function signup (req,res,next){
  let hash = bcrypt.hashSync(req.body.password,salt)
  Users.create({
    username: req.body.username,
    password: hash,
    email: req.body.email
  },function(err,result){
    res.send(result)
  })
}

function updateUser(req,res,next){
  Users.findOne({
    _id:req.params.id
  },function(err,result){
    Users.updateOne({
      _id: req.params.id
    },{
      username: req.body.username || result.username,
      password: req.body.password || result.password,
      email: req.body.email || result.email
    })
  })
}

function login (req,res,next){
  Users.findOne({
    username: req.body.username
  },function(err,result){
    if(bcrypt.compare(req.body.password,result.password)){
      let user = {
        _id: result.id,
        username: result.username
      }
      res.send(user)
    }
  })
}

function listUsers (req,res,next){
  Users.find({},function(err,result){
    res.send(result)
  })
}

function deleteUser (req,res,next){
  Users.remove({
    _id: req.params.id
  },function(err,result){
    res.send(`Delete User Success!`)
  })
}

function getOneUser (req,res,next){
  Users.findOne({
    _id: req.params.id
  },function(err,result){
    res.send(result)
  })
}

module.exports = {
  getOneUser,deleteUser,listUsers,login,updateUser,signup
}