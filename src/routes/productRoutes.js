const express = require('express');
const productsController = require('../controllers/productsController');

const router = express.Router();

router.get('/products/:id', productsController.getById);
router.get('/products', productsController.getAll);

module.exports = router;
