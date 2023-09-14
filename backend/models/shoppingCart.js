const mongoose = require("mongoose")

const Schema = mongoose.Schema

const itemSchema = new Schema({
    text: {
        type: String,
        required: true
    }
})

module.exports = mongoose.model("Item", itemSchema)