const express = require('express');
const salesController = require('../controllers/salesController');

const router = express.Router();

router.get('/', salesController.listaVenda);
router.post('/', salesController.criarVenda);

module.exports = router;
