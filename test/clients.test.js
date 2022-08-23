
//Imports
const clientsController = require('../src/clients')
const expect = require('../node_modules/.bin/_mocha').expect
const sinon = require('../node_modules/.bin/sinon')

//Tests
describe('clients controller', () => {
    it('returns  clients list', () => {
        //criando modelo de interface da função
        let res = {
            send: function(){}
        }
        //mockando a interface da função deixando fake com o sinon
        let mock = sinon.mock(res)
        //mockando a função com os argumentos passados
        mock.expects('send').once().withArgs('Vai renderizar list')
        //chamando a função mockada
        clientsController.list({}, res)
    })
    it('returns  clients create', () => {
        //criando modelo de interface da função
        let res = {
            send: function(){}
        }
        //mockando a interface da função deixando fake com o sinon
        let mock = sinon.mock(res)
        //mockando a função com os argumentos passados
        mock.expects('send').once().withArgs('Vai renderizar create')
        //chamando a função mockada
        clientsController.create({}, res)
    })
    it('returns  clients old', () => {
        //criando modelo de interface da função
        let res = {
            send: function(){}
        }
        //mockando a interface da função deixando fake com o sinon
        let mock = sinon.mock(res)
        //mockando a função com os argumentos passados
        mock.expects('send').once().withArgs('Vai renderizar old')
        //chamando a função mockada
        clientsController.old({}, res)
    })
    
    
    
})