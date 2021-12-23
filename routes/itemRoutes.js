const itemRoutes = require('express').Router()
const itemController = require('../controllers/itemController')

//all items
itemRoutes.get('/', itemController.showAll)

//view specific item details
itemRoutes.get('/:id', itemController.showOne)

module.exports = itemRoutes;