//Imports
const express = require('express');
const app = express()
const port = 3000
const indexRouter = require('./routes/index')
const clientsRouter = require('./routes/clients');
const path = require('path')

//Pra o express receber o .ejs:
//set onde o primeiro parâmetro  views é a pasta terá os views e o segundo parâmetro é o path.join que tem dois parâmetros  primeiro o __dirname é o caminho até chegar no dirétorio nomeado no segundo parâmetro: views
app.set('views', path.join(__dirname, 'views'))
app.set('view engine', 'ejs')



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