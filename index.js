//Imports
const express = require('express');
const app = express()
const port = 3000
const indexRouter = require('./routes/index')
const clientesRouter = require('./routes/clientes');




//Routes

   //middlewares intercepta as requisições, serve pra autenticção, salvar log 
   /*app.use((req, res, next) => {
    console.log('Passou por aqui')
    res.send('Página não encontrada')
   } )
   */


   app.use('/', indexRouter)
   app.use('/clients', clientesRouter)





   //Port
   app.listen(port, () => console.log(`Server runnig on port:  ${port}`)) 