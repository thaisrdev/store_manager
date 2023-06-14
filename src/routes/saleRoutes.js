const express = require('express');

const router = express.Router();

const SaleController = require('../controllers/salesController');

router.get('/', SaleController.getAll);

module.exports = router;
