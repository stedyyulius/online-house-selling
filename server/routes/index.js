var express = require('express');
var router = express.Router();
const Users = require('../Controllers/user-controller.js')
const Houses = require('../Controllers/house-controller.js')

/* GET home page. */
router.get('/user/list',Users.listUsers)
router.get('/user/:id',Users.getOneUser)
router.put('/user/:id',Users.updateUser)
router.post('/user/signup',Users.signup)
router.post('/user/login',Users.login)
router.delete('/user/:id',Users.deleteUser)

router.get('/house/list',Houses.listHouses)
router.get('/house/:id',Houses.getOneHouse)
router.put('/house/:id',Houses.updateHouse)
router.post('/house',Houses.createHouse)
router.delete('/house/:id',Houses.deleteHouse)

module.exports = router;
