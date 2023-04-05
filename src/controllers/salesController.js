const SaleService = require('../services/salesService');

const getAll = async (_req, res, next) => {
  try {
    const result = await SaleService.getAll();

    if (!result) {
      return res.status(404).json({ message: 'Nenhuma sale retornada' });
    }

    res.status(200).json(result);
  } catch (error) {
    next(error);
  }
};

const create = async (req, res, next) => {
  try {
    const result = await SaleService.create(req.body);
    res.status(201).json(result);
  } catch (error) {
    next(error);
  }
};

module.exports = {
  getAll,
  create,
};
