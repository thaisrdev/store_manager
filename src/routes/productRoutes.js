const express = require('express');
const productsController = require('../controllers/productsController');
const validateName = require('../middlewares/validateName');

const router = express.Router();

router.get('/:id', productsController.getById);
router.get('/', productsController.getAll);
router.post('/', validateName, productsController.cadastro);

module.exports = router;
