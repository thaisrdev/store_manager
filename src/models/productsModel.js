const { connection } = require('./connection');

const getAll = async () => {
  const query = 'SELECT * FROM StoreManager.products';
  const [result] = await connection.execute(query);
  console.log(result);
  return result;
};

const getById = async (id) => {
  const query = 'SELECT * FROM StoreManager.products WHERE id = ?';
  const [[result]] = await connection.execute(query, [id]);
  return result;
};

const getByName = async (name) => {
  const query = 'INSERT INTO StoreManager.products (name) VALUE(?)';
  const [result] = await connection.execute(query, [name]);
  console.log(result);
  return result.insertId;
};

module.exports = {
  getAll,
  getById,
  getByName,
};