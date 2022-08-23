
// criar os modulos de cliente aqui

const list = (req,res) => {
    res.send('Vai renderizar list')
}
const create = (req,res) => {
    res.send('Vai renderizar create')
}
const old = (req,res) => {
    res.send('Vai renderizar old')
}

module.exports = {
    list,
    create,
    old
}