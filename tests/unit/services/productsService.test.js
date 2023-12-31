const { expect } = require('chai');
const sinon = require('sinon');
const productsService = require('../../../src/services/productsService');
const productsModel = require('../../../src/models/productsModel');

const todosProdutos = [
  {
    id: 1,
    name: 'Martelo de Thor',
  },
  {
    id: 2,
    name: 'Traje de encolhimento',
  },
  {
    id: 3,
    name: 'Escudo do Capitão América',
  },
];

const nomeInvalido = 'oi';

const nomeValido = 'Tardis do Doctor';


describe('Testa a camada Service', function () {
    
  it('Testa a função getAll', async function () {
      
    sinon.stub(productsModel, 'getAll').resolves(todosProdutos);
      const result = await productsService.getAll();
      expect(result).to.deep.equal(todosProdutos);
    });

  it('Testa a função getById', async function () {
      
    sinon.stub(productsModel, 'getById').resolves(todosProdutos[0]);
      const result = await productsService.getById(1);
      expect(result).to.deep.equal();
    });

  it('Testa a função cadastro', async function () {

    sinon.stub(productsModel, 'cadastro').resolves(nomeValido);
    sinon.stub(productsModel, 'getById').resolves([todosProdutos[0]]);
    const result = await productsService.cadastro(nomeValido);
    expect(result.id).to.equal(1);
    });

  it('Testa a função atualizar', async function () {
          
    sinon.stub(productsModel, 'atualizar').resolves(1, nomeValido);
    sinon.stub(productsModel, 'getById').resolves([todosProdutos[0]]);

    const result = await productsService.atualizar(1, nomeValido);

    expect(result.type).to.deep.equal(null);
    });

  it('Testa nome inválido na função atualizar', async function () {
    
    sinon.stub(productsModel, 'atualizar').resolves(1, nomeValido);
    sinon.stub(productsModel, 'getById').resolves([null]);
      const result = await productsService.atualizar(1, nomeInvalido);
      expect(result.message).to.equal('Product not found');
    });

  it('Testa a função deletar', async function () {

    sinon.stub(productsModel, 'getById').resolves([todosProdutos[0]]);
    sinon.stub(productsModel, 'deletar').resolves()
      
      const result = await productsService.deletar(1);
      expect(result).to.deep.equal();
    });

  it('Testa id inválido na função deletar', async function () {

    sinon.stub(productsModel, 'getById').resolves([null]);
    sinon.stub(productsModel, 'deletar').resolves();
      
      const result = await productsService.deletar(7);
      expect(result.message).to.equal('Product not found');
    });

     afterEach(function () {
       sinon.restore();
     });
  });


