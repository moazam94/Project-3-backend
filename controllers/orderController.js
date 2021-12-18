const { where } = require('sequelize/dist')
const models = require('../models')
const orderController = {}

orderController.create = async (req, res) => {
    try{
        const order = await models.create({
            userId: req.body.userId,
            address: req.body.address,
            cardInfo: req.body.cardInfo 
        })
        req.body.itemIds.forEach(id => {
            const item = await models.item.findOne({
                where: {
                    id: id
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

orderController.showItem = async (req, res) => {
    try {
        const order = await models.order.findOne({
            where: {userId: req.body.userId},
            order: [['createdAt', 'DESC']]
        })
        await res.json(order)
    }catch (error) {
        res.status(400).json({error})
    }
}

orderController.showOne = async (req, res) => {
    try {
        const order = await models.order.findOne({
            include: [{
                model: models.user,
                at: {
                    id: req.params.id
                }
            }],
            where: {id: req.body.orderId}
        })
        await res.json({order})
    }catch (error) {
        res.status(400).json({error})
    }
}

orderController.showAll = async (req, res) => {
    try {
        const orders = await models.order.findAll({
            include: [{
                model: models.user,
                at: {
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