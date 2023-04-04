const { connection } = require('./connection');

const getAll = async () => {
  const query = 'SELECT * FROM StoreManager.products';
  const [result] = await connection.execute(query);
  return result;
};

const getById = async (id) => {
  const query = 'SELECT * FROM StoreManager.products WHERE id = ?';
  const [result] = await connection.execute(query, [id]);
  return result;
};

const cadastro = async (name) => {
  const query = 'INSERT INTO StoreManager.products (name) VALUE(?)';
  const [result] = await connection.execute(query, [name]);
  return result.insertId;
};

const atualizar = async (id, name) => {
  const query = `UPDATE StoreManager.products SET name = '${name}' WHERE id = ${id}`;
  const result = await connection.execute(query);
  return result;
};

const deletar = async (id) => {
  const query = 'DELETE FROM StoreManager.products WHERE id = ?';
  const result = await connection.execute(query, [id]);
  console.log(result);
  return result;
};

module.exports = {
  getAll,
  getById,
  cadastro,
  atualizar,
  deletar,
};