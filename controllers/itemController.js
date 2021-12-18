const models = require('../models')
const itemController = {}

itemController.showAll = async (req, res) => {
    try {
        const allItems = await models.item.findAll()
        await res.json({allItems})
    } catch (error) {
        await res.status(400).json({error})
    }
}


itemController.showOne = async (req, res) => {
    try{
        const item = await models.item.findOne({
            where: {
                id: req.params.id
            }
        })
        await res.json({item})
    } catch (error) {
        await res.status(400).json({error})
    }
}

module.exports = itemController