const { expect } = require('chai');
const sinon = require('sinon');
const productsService = require('../../../src/services/productsService');
// const { productsModel } = require('../../../src/models/productsModel');

// const todosProdutos = [
//   {
//     id: 1,
//     name: 'Martelo de Thor',
//   },
//   {
//     id: 2,
//     name: 'Traje de encolhimento',
//   },
//   {
//     id: 3,
//     name: 'Escudo do Capitão América',
//   },
// ];


// const idValido = 1;

const nomeInvalido = 'oi';

const nomeValido = 'Tardis do Doctor';


describe('Testa a camada Service', function () {
    
  // it('Testa a função getAll', async function () {
      
  //     const result = await productsService.getAll();
  //     expect(result).to.deep.equal(todosProdutos);
  //   });

  it('Testa a função getById', async function () {
      
      const result = await productsService.getById(1);
      expect(result).to.deep.equal();
    });

  it('Testa a função cadastro', async function () {

      const result = await productsService.cadastro(nomeValido);
      expect(result.name).to.deep.equal('Tardis do Doctor');
    });

  it('Testa a função atualizar', async function () {
      
      const result = await productsService.atualizar(1, nomeValido);
      expect(result.message).to.deep.equal('Product not found');
    });

  it('Testa nome inválido na função atualizar', async function () {
      
      const result = await productsService.atualizar(1, nomeInvalido);
      expect(result.message).to.equal('Product not found');
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

