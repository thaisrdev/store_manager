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

const cadastro = async (name) => {
  const product = await productsModel.getByName(name);
  const [newProduct] = await productsModel.getById(product);
  console.log(newProduct);
  return newProduct;
};

const atualizar = async (id, name) => {
  await productsModel.atualizar(id, name);
  const [updated] = await productsModel.getById(id);
  if (!updated) return { type: 404, message: 'Product not found' };
  return { type: null, message: updated };
};

module.exports = {
  getAll,
  getById,
  cadastro,
  atualizar,
};
