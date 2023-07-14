const Product = require('../models/product')

const asyncHandler = require('../middleware/asyncHandler');
const { validationCheck } = require('../middleware/validationCheck');

exports.info = asyncHandler(async (req, res, next) => {
    try {
        return res.status(200).json({
            success: true,
            routes: {
                "api/v1/product/": {
                    method: "POST",
                    body: { "name": "string", "image": "string", "description": "string", "price": "string" }
                },
                "product/:id": {
                    method: "PUT",
                    params: {id:"MongoDB Id"},
                    body: { "name": "string", "image": "string", "description": "string", "price": "string" }
                },
                "api/v1/product/:id": {
                    method: "DELTE",
                    params: {id:"MongoDB Id"},
                },
                "product/": {
                    method: "GET",
                }
            }
        })
    } catch (error) {
        return res.status(500).json({ success: false, data: error })
    }
})

exports.getProduct = asyncHandler(async (req, res, next) => {
    try {
        const productData = await Product.find({})
        return res.status(200).json({ success: true, data: productData })
    } catch (error) {
        return res.status(500).json({ success: false, data: error })
    }
})

exports.createProduct = asyncHandler(async (req, res, next) => {
    try {
        const { name, description, image, price } = req.body;
        let schemaData = { name, description, image, price };
        let validation = validationCheck(schemaData);
        if (!validation.status) {
            return res.status(400).json({ success: false, data: `Please provide a ${validation?.errorAt}` })
        }
        const productData = await Product.create(schemaData)
        return res.status(200).json({ success: true, data: productData })
    } catch (error) {
        return res.status(500).json({ success: false, data: error })
    }
})

exports.updateProduct = asyncHandler(async (req, res, next) => {
    try {
        const { id } = req.params;
        const productData = await Product.findOneAndUpdate({ _id: id }, req.body, { returnOriginal: false })
        return res.status(200).json({ success: true, data: productData })
    } catch (error) {
        return res.status(500).json({ success: false, data: error })
    }

})

exports.deleteProduct = asyncHandler(async (req, res, next) => {
    try {
        const { id } = req.params;
        const productData = await Product.deleteOne({ _id: id })
        if (productData)
            return res.status(200).json({ success: true, data: "Product Deleted" })
    } catch (error) {
        return res.status(500).json({ success: false, data: error })
    }

}) 