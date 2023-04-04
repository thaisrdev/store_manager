const chai = require('chai');
const { expect } = chai;
const sinon = require('sinon');
const sinonChai = require('sinon-chai');

const productsService = require('../../../src/services/productsService');
const productsController = require('../../../src/controllers/productsController');

const todosProdutos = [
  { id: 1, name: 'Martelo de Thor' },
  { id: 2, name: 'Traje de encolhimento' },
  { id: 3, name: 'Escudo do Capitão América' },
];

const produto = {
  id: 1,
  name: 'Martelo de Thor',
};

const mockProduto = {
  name: 'Tardis do Doctor',
};

const mockNovoProduto = {
  id: 4,
  name: 'Tardis do Doctor',
};

const mockProdutoAtualizado = {
  id: 1,
  name: 'Tardis do Doctor',
};

chai.use(sinonChai);

describe('Testa a camada Controller', function () {
    
  it('Testa a função getAll', async function () {
      
      const res = {};
      const req = {};

      res.status = sinon.stub().returns(res);
      res.json = sinon.stub().returns();
      sinon
        .stub(productsService, 'getAll')
        .resolves(todosProdutos);

      await productsController.getAll(req, res);

      expect(res.status).to.have.been.calledWith(200);
      expect(res.json).to.have.been.calledWith(todosProdutos);
    });

  it('Testa a função getById', async function () {
      
      const res = {};
      const req = { params: { id: 1 } };

      res.status = sinon.stub().returns(res);
      res.json = sinon.stub().returns();
      sinon
        .stub(productsService, 'getById')
        .resolves(produto);

      await productsController.getById(req, res);

      expect(res.status).to.have.been.calledWith(200);
      expect(res.json).to.have.been.calledWith(produto);
    });

  it('Testa a função cadastro', async function () {
      
      const res = {};
      const req = { body: mockProduto };

      res.status = sinon.stub().returns(res);
      res.json = sinon.stub().returns();
      sinon
        .stub(productsService, 'cadastro')
        .resolves(mockNovoProduto);

      await productsController.cadastro(req, res);

      expect(res.status).to.have.been.calledWith(201);
      expect(res.json).to.have.been.calledWith(mockNovoProduto);
    });

    it('Testa função atualizar', async function () {

      const res = {};
      const req = { params: { id: 1 }, body: { name: 'Tardis do Doctor' } };

      res.status = sinon.stub().returns(res);
      res.json = sinon.stub().returns();
      sinon
        .stub(productsService, 'atualizar')
        .resolves({ type: null, message: mockProdutoAtualizado });

      await productsController.atualizar(req, res);

      expect(res.status).to.have.been.calledWith(200);
      expect(res.json).to.have.been.calledWith(mockProdutoAtualizado);
    });

    it('Testa a função deletar', async function () {

      const res = {};
      const req = { params: { id: 1 } };

      res.status = sinon.stub().returns(res);
      res.json = sinon.stub().returns();
      sinon
        .stub(productsService, 'deletar')
        .resolves({ type: null, message: '' });

      await productsController.deletar(req, res);

      expect(res.status).to.have.been.calledWith(204);
      expect(res.json).to.have.been.calledWith();
    });
  });

  afterEach(function () {
    sinon.restore();
  });
