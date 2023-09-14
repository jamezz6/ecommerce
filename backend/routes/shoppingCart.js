const express = require("express")
const router = express.Router()
const itemsController = require("../controllers/items")

router.get("/items", itemsController.getItems)
router.get("/item/:id", itemsController.getItem)
router.delete("/items/:id", itemsController.deleteItem)
module.exports = router