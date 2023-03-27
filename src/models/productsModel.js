const { connection } = require('./connection');

const getAll = async () => {
  const query = 'SELECT * FROM StoreManager.products';
  console.log(query);
  const [result] = await connection.execute(query);
  console.log(result);
  return result;
};

const getById = async (id) => {
  const query = 'SELECT * FROM StoreManager.products WHERE id = ?';
  const [result] = await connection.execute(query, [id]);
  return result;
};

module.exports = {
  getAll,
  getById,
};