const { expect } = require('chai');
const sinon = require('sinon');
const productsModel = require('../../../src/models/productsModel');

const todosProdutos = [
  {
    id: 1,
    name: "Martelo de Thor",
  },
  {
    id: 2,
    name: "Traje de encolhimento",
  },
  {
    id: 3,
    name: "Escudo do Capitão América",
  },
];

const novoProduto = {
  id: 4,
  name: "Tardis do Doctor",
};

describe('Testa a camada Model', function () {

  it('Testa a função getAll', async function () {

    const result = await productsModel.getAll();
    expect(result).to.be.deep.equal(todosProdutos);
  });

  it('Testa a função getById', async function () {

    const result = await productsModel.getById(1);
    expect(result).to.be.deep.equal({
      id: 1,
      name: "Martelo de Thor",
    });
  });

  it('Testa a função cadastro', async function () {

    const result = await productsModel.cadastro(novoProduto);
    expect(result).to.equal(5);
  });

  it('Testa a função atualizar', async function () {

    const result = await productsModel.atualizar(1, 'Tardis do Doctor');
    expect(result).to.equal();
  });

  it('Testa a função deletar', async function () {

    const result = await productsModel.deletar(1);
    expect(result).to.equal('undefined');
  });

  afterEach(function () {
    sinon.restore();
  });
});