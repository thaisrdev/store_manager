const productsModel = require('../models/productsModel');

const getAll = async () => {
  const products = await productsModel.getAll();
  return products;
};

const getById = async (id) => {
  if (!id) return false;
  const product = await productsModel.getById(id);
  return product[0];
};

module.exports = {
  getAll,
  getById,
};
