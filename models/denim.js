const mongoose = require('mongoose')
const { Schema } = require('mongoose')

const denimSchema = new Schema (
    {
        name: { type: String, required: true },
        priceUSD: { type: Number, required: true },
        fit: { type: String, required: true },
        weight: { type: String, required: true },
        color: { type: String, required: true },
        sizes: [{ type: Number, required: true }], //not sure if I want multiple sizes - if I can create an array within my denim model, or if I would have to create a size Schema instead.
        //review: {},
        brand: {type: Schema.Types.ObjectId, ref: 'brand'},
        description: { type: String, required: true },
        isSelvedge: { type: String, required: true }
    },
    { timestamps: true }
)

module.exports = mongoose.model('Denim', denimSchema)