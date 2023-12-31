const { expect } = require('chai');
const sinon = require('sinon');
const productsModel = require('../../../src/models/productsModel');
const connection = require('../../../src/models/connection');
const datamock = require('../../../__tests__/_dataMock')

describe('Testa a camada Model', function () {

  it('Testa a função getAll', async function () {

    sinon.stub(connection,'execute').resolves([datamock.allProductsResponse]);
    const result = await productsModel.getAll();
    expect(result).to.equal(datamock.allProductsResponse);
  });

  it('Testa a função getById', async function () {

    sinon.stub(connection,'execute').resolves([datamock.allProductsResponse]);
    const result = await productsModel.getById(1);
    expect(result).to.equal(datamock.allProductsResponse);
  });

  it('Testa a função cadastro', async function () {

    sinon.stub(connection, 'execute').resolves([{ insertId: 5 }]);
    const result = await productsModel.cadastro(datamock.productUpdateBody);
    expect(result).to.equal(5);
  });

  it('Testa a função cadatros', async function () {
      
      sinon.stub(connection, 'execute').resolves([{ insertId: 6 }]);
      const result = await productsModel.cadastro(datamock.productUpdateBody);
      expect(result).to.equal(6);
    });

  it('Testa a função atualizar', async function () {
    sinon.stub(connection, 'execute').resolves(datamock.productUpdateBody);
    const result = await productsModel.atualizar(1, 'Machado do Thor Stormbreaker');
    expect(result).to.deep.equal(datamock.productUpdateBody);
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