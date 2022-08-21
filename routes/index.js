//Import
const express = require('express');
const router = express.Router();
const indexController = require('../controllers/index')

//Routes

// modulos com as funções importada de controllers/index
   router.get('/', indexController.home)
   router.get('/sobre', indexController.sobre)
   router.get('/contato', indexController.contato)
   router.get('/calc', indexController.calc)


   module.exports =   router
   
      