const orderRoutes = require('express').Router()
const { showOne } = require('../controllers/itemController')
const orderController = require('../controllers/orderController')

//add an item to cart

//orderRoutes.post('/items/:id', orderController.add)
orderRoutes.post('/orders', orderController.create)
orderRoutes.get('/cart', orderController.showItem)
//orderRoutes.delete('/cart', orderController.remove)
orderRoutes.get('/orders/:id', orderController.showOne)
orderRoutes.get('/orders', orderController.showAll)

module.exports = orderRoutes