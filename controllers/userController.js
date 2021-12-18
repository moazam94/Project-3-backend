const models = require('../models')
const userController = {}

userController.create = async (req, res) => {
    try{
        const newAccount = await models.user.create({
            name: req.body.name,
            email: req.body.email,
            password: req.body.password
        })
        await res.send({newAccount})
    }catch (error) {
        res.status(400).json({error})
    }
}

userController.login = async (req, res) => {
    try {
        const user = await models.user.findOne({
            where: {
                email: req.body.email
            }
        })
        if (req.body.password === user.password) {
            res.json({user})
        } else {
            res.status(401).json({message: 'login failed'})
        }
    } catch (error) {
        res.status(400).json({error})
    }
}

module.exports = userController