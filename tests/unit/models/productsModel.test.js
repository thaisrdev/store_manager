const { expect } = require('chai');
const sinon = require('sinon');
const productsModel = require('../../../src/models/productsModel');
const { connection } = require('../../../src/models/connection');
const { todosProdutos, newProduct } = require('./productsModel.mock');

describe('Testa a camada Model', function () {

  it('Testa a função getAll', async function () {

    sinon.stub(connection,'execute').resolves([todosProdutos]);
    const result = await productsModel.getAll();
    expect(result).to.equal(todosProdutos);
  });

  it('Testa a função getById', async function () {

    sinon.stub(connection,'execute').resolves([todosProdutos]);
    const result = await productsModel.getById(1);
    expect(result).to.equal(todosProdutos);
  });

  it('Testa a função cadastro', async function () {

    sinon.stub(connection, 'execute').resolves([{ insertId: 5 }]);
    const result = await productsModel.cadastro(newProduct);
    expect(result).to.equal(5);
  });

  it('Testa a função atualizar', async function () {
    sinon.stub(connection, 'execute').resolves([{ name: 'Tardis do Doctor' }]);
    const result = await productsModel.atualizar(1, 'Tardis do Doctor');
    expect(result).to.deep.equal([{ name: "Tardis do Doctor" }]);
  });

  it('Deletando um produto já existente', async function () {

    sinon.stub(connection, 'execute').resolves([{ insertId: 1 }]);
    const result = await productsModel.deletar(1);
    expect(result).to.deep.equal([{ insertId: 1 }]);
  });

  afterEach(function () {
    sinon.restore();
  });
});