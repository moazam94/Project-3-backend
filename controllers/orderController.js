//const { where } = require('sequelize/dist')
const models = require('../models')
const orderController = {}

orderController.create = async (req, res) => {
    try{
        const order = await models.create({
            userId: req.body.userId,
            address: req.body.address,
            city: req.body.city,
            state: req.body.state,
            zip: req.body.zip,
            cardInfo: req.body.cardInfo 
        })
        req.body.userCart.forEach(async (itemName) => {
            const item = await models.item.findOne({
                where: {
                    name: itemName
                }
            })
            order.addItem(item);
        })
        const user = await models.user.findOne({
            where: {
                id: req.body.userId
            }
        })
        await user.addOrder(order)
        res.json({orderId: order.id})
    } catch (error) {
        res.status(400).json({error})
    }
}

// orderController.showItem = async (req, res) => {
//     try {
//         const order = await models.order.findOne({
//             where: {userId: req.body.userId},
//             order: [['createdAt', 'DESC']]
//         })
//         await res.json(order)
//     }catch (error) {
//         res.status(400).json({error})
//     }
// }

orderController.getOne = async (req, res) => {
    try {
        const items = await models.order.findOne({
            
            where: {id: req.body.id}
        }).getItems()
        await res.json({order: items})
    }catch (error) {
        res.status(400).json({error})
    }
}

orderController.getAll = async (req, res) => {
    try {
        const orders = await models.order.findAll({
            include: [{
                model: models.user,
                on: {
                    userId: req.body.userId
                }
            }]
        })
        await res.json({orders})
    }catch (error) {
        res.status(400).json({error})
    }
}

module.exports = orderController