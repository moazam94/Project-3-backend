const orderRoutes = require('express').Router()
const { showOne } = require('../controllers/itemController')
const orderController = require('../controllers/orderController')

//add an item to cart
orderRoutes.post('/items/:id', orderController.add)
orderRoutes.get('/users/cart', orderController.showItem)
orderRoutes.delete('/cart', orderController.remove)
orderRoutes.get('users/order/:id', orderController.showOne)
orderRoutes.get('/users/order', orderController.showAll)

module.exports = orderRoutes