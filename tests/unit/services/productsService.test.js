const { expect } = require('chai');
const sinon = require('sinon');
const productsService = require('../../../src/services/productsService');
const { productsModel } = require('../../../src/models/productsModel');

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

const idInvalido = 9;

const idValido = 1;

const nomeInvalido = "oi";

const nomeValido = "Tardis do Doctor";


describe('Testa a camada Service', function () {
    
  it('Testa a função getAll', async function () {
      
      sinon.stub(productsModel, 'getAll').resolves(todosProdutos);
      const result = await productsService.getAll();
      expect(result.type).to.be.equal(null);
      expect(result.message).to.deep.equal(todosProdutos);
    });

  it('Testa a função getById', async function () {
      
      sinon.stub(productsModel, 'getById').resolves(todosProdutos[0]);
      const result = await productsService.getById(idValido);
      expect(result.type).to.be.equal(null);
      expect(result.message).to.deep.equal(todosProdutos[0]);
    });

  it('Testa erro na função getById', async function () {
      
      const result = await productsService.getById(idInvalido);
      expect(result.type).to.be.equal('PRODUCT_NOT_FOUND');
      expect(result.message).to.be.equal('Product not found');
    });

  it('Testa a função cadastro', async function () {

      sinon.stub(productsModel, 'cadastro').resolves(nomeValido);
      sinon.stub(productsModel, 'getById').resolves(5);
      const result = await productsService.cadastro(nomeValido);
      expect(result.type).to.be.equal(null);
      expect(result.message).to.deep.equal(5);
    });

  it('Testa erro na função cadastro', async function () {
      
      const result = await productsService.cadastro(nomeInvalido);
      expect(result.message).to.equal(
        '"name" length must be at least 5 characters long'
      );
    });

  it('Testa a função atualizar', async function () {
      
      const result = await productsService.atualizar(1, nomeValido);
      expect(result.message).to.deep.equal({ id: 1, name: nomeValido });
    });

  it('Testa nome inválido na função atualizar', async function () {
      
      const result = await productsService.atualizar(1, nomeInvalido);
      expect(result.message).to.equal(
        '"name" length must be at least 5 characters long'
      );
    });

  it('Testa id inválido na função atualizar', async function () {
      
      const result = await productsService.atualizar(7, nomeValido);
      expect(result.message).to.equal('Product not found');
    });

  it('Testa a função deletar', async function () {
      
      const result = await productsService.deletar(1);
      expect(result.message).to.deep.equal('Product not found');
    });

  it('Testa id inválido na função deletar', async function () {
      
      const result = await productsService.deletar(7);
      expect(result.message).to.equal('Product not found');
    });
  });

   afterEach(function () {
    sinon.restore();
  });

