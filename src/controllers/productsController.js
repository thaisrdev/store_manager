const productsService = require('../services/productsService');

const getAll = async (_req, res) => {
  const products = await productsService.getAll();
  return res.status(200).json(products);
};

const getById = async (req, res) => {
  try {
    const { params: { id } } = req;
    const productById = await productsService.getById(id);
    if (productById) {
      return res.status(200).json(productById);
    }
    return res.status(404).json({ message: 'Product not found' });
  } catch (error) {
    console.error(error);
  }
};

const cadastro = async (req, res) => {
  const { body: { name } } = req;
  const product = await productsService.cadastro(name);
  return res.status(201).json(product);
};

const atualizar = async (req, res) => {
  const {
    body: { name },
    params: { id },
  } = req;
  const { type, message } = await productsService.atualizar(id, name);
  if (type) return res.status(404).json({ message });
  return res.status(200).json(message);
};

module.exports = {
  getAll,
  getById,
  cadastro,
  atualizar,
};