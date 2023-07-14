const router = require('express').Router();
const { getProduct, createProduct, deleteProduct, updateProduct, info } = require('../controllers/index')

router.route('/product').get(getProduct)
router.route('/').get(info)
router.route('/product').post(createProduct)
router.route('/product/:id').put(updateProduct)
router.route('/product/:id').delete(deleteProduct)

module.exports = router;