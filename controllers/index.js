
//criar modulos de index aqui

const home = (req,res)=>{
    res.send('Vai renderizar a HOME')
}
const sobre = (req,res)=> {
     res.send('Vai renderizar o SOBRE')
}
const contato = (req,res) => {
    res.send('Vai renderizar o CONTATO')
}



module.exports = {
    home,
    sobre,
    contato
}