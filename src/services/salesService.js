const productsModel = require('../models/productsModel');
const salesModel = require('../models/salesModel');
const validate = require('../middlewares/validateSale');

const criarVenda = async (sales) => {
  const error = validate.validateAmount(sales);
  if (error.type) return error;
  const product = await Promise.all(
    sales.map((e) => productsModel.getById(e.productId)),
  );
  const verificacao = product.some((e) => e === undefined);
  if (verificacao) {
    return {
      type: 'PRODUCT_NOT_FOUND', message: 'Product not found',
    };
  }
  const id = await salesModel.inserirVenda();
  await Promise.all(
    sales.map((e) =>
      salesModel.inserirProduto(id, e.productId, e.quantity)),
  );
  return { message: { id, itemsSold: sales } };
};

const getAll = async () => {
  const result = await salesModel.getAll();
  return { type: null, message: result };
};

module.exports = {
  getAll,
  criarVenda,
};
