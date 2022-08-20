const express = require('express');
const router = express.Router();

//Routes
   router.get('/', (req, res) => { 
    res.send('Home')
   })
   router.get('/sobre', (req, res) => { 
    res.send('sobre')
   })


   router.get('/contato', (req, res) => { 
    res.send('contato')
   })


   module.exports =   router
   
      