const express = require('express')
const Product = require("../models/product.model.js");
const router = express.Router();
const {getProducts, getProduct, createProduct, updateProduct, deleteProduct} = require("../controllers/product.js");

//get all product
router.get('/', getProducts);


//get product by ID
router.get('/:id', getProduct);


//create new product
router.post('/',createProduct);


//update product by ID
router.put('/:id',updateProduct);


//delete product by ID
router.delete('/:id',deleteProduct);

module.exports = router;