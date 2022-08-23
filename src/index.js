
//criar modulos de index aqui

const home = (req,res)=>{
    //res.render vai pegar home dentro de views
    //segundo parâmetro mandar a hora ser renderizada
    res.render('home', {
        //passando variáveis pra ser renderizada
        time: new Date().getTime(),
        lista:['Victor','Honorato'],
        animais:[
            {tipo: 'canino'},
            {tipo: 'felino'},
            {tipo: 'bovide'}

        ]
    })

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
        res.render('calc', {soma} )
    }else{
        res.send('Vai renderizar Calculadora')
    }
        
}

const par = (req,res) => {
    //estanciar em isPar condição pra ver se o numero que será declarado em parâmetro na url  (num) é par ou impar
    const isPar = (req.params.num % 2)===0
    if(isPar){
        res.send('Numero eh par')
    }else{
        res.send('Numero impar')
    }
}



module.exports = {
    home,
    sobre,
    contato,
    calc,
    par
}