const mongoose = require('mongoose');

const ProductScheme = new mongoose.Schema({
    name: { type: 'string' },
    description: { type: 'string' },
    image: { type: 'string' },
    price: { type: 'string' },
}, { timestamps: true })

module.exports = mongoose.model('product', ProductScheme)