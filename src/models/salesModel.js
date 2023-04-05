const connection = require('./connection');

const getAll = async () => {
  const query = `SELECT s.id AS saleId, s.date, sp.product_id AS productId, sp.quantity
  FROM StoreManager.sales s
  INNER JOIN StoreManager.sales_products sp
  ON s.id = sp.sale_id
  ORDER BY s.id`;
  const [result] = await connection.execute(query);
  return result;
};

const create = async (array) => {
  const idquery = 'INSERT INTO StoreManager.sales (id) VALUES (null)';
  const [resultId] = await connection.execute(idquery);

  const prodquery = `INSERT INTO StoreManager.sales_products (product_id, quantity, sale_id)
  VALUES (?, ?, ?)`;
  const result = array.map(({ productId, quantity }) =>
    connection.execute(prodquery, [productId, quantity, resultId.insertId]));
  await Promise.all(result);

  const updatequery = `UPDATE StoreManager.products
  SET quantity = quantity - ?
  WHERE id = ?`;
  array.forEach(async ({ productId, quantity }) => {
    await connection.execute(updatequery, [quantity, productId]);
  });

  return {
    id: resultId.insertId,
    itemsSold: array,
  };
};

module.exports = {
  getAll,
  create,
};