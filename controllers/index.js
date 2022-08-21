
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
const calc = (req,res)=> {
    console.log(req.query)
    //condicional pra se houver  o valor abaixo manifestar ação
    if(req.query.num1 && req.query.num2){
        // use destructuring assignment to add requisition query key to num1 and num2
        const { num1, num2 } = req.query
        //criar const soma e anexar parseFloat as key 
        const soma =  parseFloat(num1) + parseFloat(num2)
        //renderiza o resultado da operação de acordo com os valores declarados na URL
        res.send(`O valor da soma é: ${soma} `)
    }
        res.send('Vai renderizar Calculadora')
}



module.exports = {
    home,
    sobre,
    contato,
    calc
}