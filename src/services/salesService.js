const SalesModel = require('../models/salesModel');

const getAll = async () => {
  const result = await SalesModel.getAll();
  return result;
};

const create = async (param) => {
  const result = await SalesModel.create(param);
  return result;
};

module.exports = {
  getAll,
  create,
};
