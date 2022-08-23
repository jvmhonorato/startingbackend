//Import
const express = require('express');
const router = express.Router();
const indexController = require('../src/index')

//Routes

// modulos com as funções importada de controllers/index
   router.get('/', indexController.home)
   router.get('/sobre', indexController.sobre)
   router.get('/contato', indexController.contato)
   router.get('/calc', indexController.calc)
   router.get('/par/:num',indexController.par)


   module.exports =   router
   
      