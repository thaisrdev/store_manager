const salesService = require('../services/salesService');

const criarVenda = async (req, res) => {
  const itemsSold = req.body;
  const { type, message } = await salesService.criarVenda(itemsSold);
  if (type) return res.status(404).json({ message });
  res.status(201).json(message);
};

const listaVenda = async (_req, res) => {
  const { type, message } = await salesService.getAll();
  if (type) return res.status(404).json(message);
  res.status(200).json(message);
};

module.exports = {
  criarVenda,
  listaVenda,
};
