const userRoutes = require('express').Router()
const userController = require('../controllers/userController')


//create account
userRoutes.post('/', userController.create)

//login to account
userRoutes.post('/login', userController.login)

module.exports = userRoutes;
