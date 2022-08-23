//Imports
const indexController = require('../src/index')
const expect = require('../node_modules/.bin/_mocha').expect
const sinon = require('sinon')

//Tests
describe('index controller', () => {
    it('returns  home', () => {
        //criando modelo de interface da função
        let res = {
            send: function(){}
        }
        //mockando a interface da função deixando fake com o sinon
        let mock = sinon.mock(res)
        //mockando a função com os argumentos passados
        mock.expects('send').once().withArgs('Vai renderizar home')
        //chamando a função mockada
        indexController.home({}, res)
    })
    it('returns  sobre', () => {
        //criando modelo de interface da função
        let res = {
            send: function(){}
        }
        //mockando a interface da função deixando fake com o sinon
        let mock = sinon.mock(res)
        //mockando a função com os argumentos passados
        mock.expects('send').once().withArgs('Vai renderizar sobre')
        //chamando a função mockada
        indexController.sobre({}, res)
    })
    it('returns  contato', () => {
        //criando modelo de interface da função
        let res = {
            send: function(){}
        }
        //mockando a interface da função deixando fake com o sinon
        let mock = sinon.mock(res)
        //mockando a função com os argumentos passados
        mock.expects('send').once().withArgs('Vai renderizar contato')
        //chamando a função mockada
        indexController.contato({}, res)
    })
    it('returns  calc', () => {
        //criando modelo de interface da função
        let res = {
            send: function(){}
        }
        //mockando a interface da função deixando fake com o sinon
        let mock = sinon.mock(res)
        //mockando a função com os argumentos passados
        mock.expects('send').once().withArgs('Vai renderizar calc')
        //chamando a função mockada
        indexController.calc({query: {}}, res)
    })
    
    
    
})