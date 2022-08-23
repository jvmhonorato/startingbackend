//Imports
const express = require('express');
const router = express.Router();
const clientsController = require('../src/clients')



//Route

//modulos importados de controllers/clients
   router.get('/list', clientsController.list)
   router.get('/new',clientsController.create)
   router.get('/old',clientsController.old)

   
   
   module.exports = router