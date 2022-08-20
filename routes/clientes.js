const express = require('express');
const router = express.Router();

//Route
   router.get('/new', (req, res) => { 
    res.send('cliente new')
   })
   router.get('/old', (req, res) => { 
    res.send('cliente')
   })
   router.get('/list', (req, res) => { 
    res.send('cliente')
   })

   module.exports = router