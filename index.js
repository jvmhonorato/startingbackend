//Imports
const express = require('express');
const app = express()
const port = 3000
const indexRouter = require('./routes/index')
const clientsRouter = require('./routes/clients');




//Routes

   //middlewares intercepta as requisições, serve pra autenticção, salvar log 
   /*app.use((req, res, next) => {
    console.log('Passou por aqui')
    res.send('Página não encontrada')
   } )
   */


   app.use('/', indexRouter)
   app.use('/clients', clientsRouter)





   //Port
   app.listen(port, () => console.log(`Server runnig on port:  ${port}`)) 