//Imports
const express = require('express');
const app = express()

const port = 3000

//Routes
app.get('/', (req, res) => { 
    res.send('Victor Honorato')
   })



   //Port
   app.listen(port, () => console.log(`Server runnig on port:  ${port}`)) 