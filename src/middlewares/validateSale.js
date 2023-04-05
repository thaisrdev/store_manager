const validateAmount = (quantityParam) => {
  const validacao = quantityParam.every(
    (elem) => elem.quantity > 0,
  );

  if (!validacao) {
    return {
      type: 'INVALID_VALUE',
      message: '"quantity" must be greater than or equal to 1',
    };
  }

  return { type: null, message: '' };
};

module.exports = {
  validateAmount,
};
