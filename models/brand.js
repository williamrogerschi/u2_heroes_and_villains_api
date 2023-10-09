const mongoose = require('mongoose')
const { Schema } = require('mongoose')

const brandSchema = new Schema (
    {
        name: { type: String, required: true},
        url: { type: String, required: true},
        location: { type: String, required: true},
        isBoutique: { type: String, required: true},
    },
    { timestamps: true}
)

module.exports = mongoose.model('Brand', brandSchema)