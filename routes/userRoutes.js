const userRoutes = require('express').Router()
const userController = require('../controllers/userController')


//create account
userRoutes.post('/', userController.create)

//login to account
userRoutes.post('/login', userController.login)

//logout user
// userRoutes.get('/logout', userController.logoutUser);

module.exports = userRoutes;
