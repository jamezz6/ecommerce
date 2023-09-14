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

const addItem = async (req, res) => {
    // get the text from the req.body
    const {text} = req.body
    // create new todo object with model
    const itemObj = new Todo ({
        text
       })
    const newItem = await itemObj.save()
       res.status(200).json(newItem)
    // await for it to be saved
    // respond with json()
  
}

module.exports = {
    getItems,
    getItem,
    deleteItem,
    addItem
}
