const connection = require('./connection');

const getAll = async () => {
  const query = `SELECT sp.sale_id, s.date, sp.product_id, sp.quantity
    FROM StoreManager.sales_products AS sp
    INNER JOIN StoreManager.sales AS s
    ON sale_id = id
    ORDER BY sp.sale_id, sp.product_id`;
  const [result] = await connection.execute(query);
  return result;
};

const inserirProduto = async (saleId, productId, quantity) => {
  const query = `INSERT INTO StoreManager.sales_products 
  (sale_id, product_id, quantity) VALUES (?, ?, ?)`;
  await connection.execute(query, [saleId, productId, quantity]);
};

const inserirVenda = async () => {
  const query = 'INSERT INTO StoreManager.sales (date) VALUE (NOW())';
  const [{ insertId }] = await connection.execute(query);
  return insertId;
};

module.exports = {
  inserirVenda,
  inserirProduto,
  getAll,
};
