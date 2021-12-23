const orderRoutes = require('express').Router()
const orderController = require('../controllers/orderController')

//add an item to cart

//orderRoutes.post('/items/:id', orderController.add)
orderRoutes.post('/', orderController.create)
//orderRoutes.get('/cart', orderController.showItem)
//orderRoutes.delete('/cart', orderController.remove)
orderRoutes.get('/:id', orderController.getOne)
orderRoutes.get('/', orderController.getAll)

module.exports = orderRoutes