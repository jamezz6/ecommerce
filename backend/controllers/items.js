 const Item = require("../models/shoppingCart")

const getItems = async (req, res) => {
    const items = await Item.find({})
    res.json({
        message: "all items",
        items: items
    })
}

const getItem = async (req, res) => {
    const { id } = req.params
    const item = await item.findById(id)
    res.status(200).json(item)
}

const deleteItem = async (req, res) => {
    const { id } = req.params
    const item = await Item.findByIdAndDelete(id)
    res.status(200).json(item)
}

module.exports = {
    getItems,
    getItem,
    deleteItem
}
