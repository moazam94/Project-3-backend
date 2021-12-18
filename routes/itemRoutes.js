const itemRoutes = require('express').Router()
const itemController = require('../controllers/itemController')

//all items
itemRoutes.get('/items', itemController.showAll)

//view specific item details
itemRoutes.get('/items/:id', itemController.showOne)

models.exports = itemRoutes;