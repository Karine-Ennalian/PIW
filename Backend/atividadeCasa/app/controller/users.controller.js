let users = [
    {
        id: 1,
        nome: 'Victor',
        email: 'victor.aefarias@gmail.com',
        senha: 123
    },
    {
        id: 2,
        nome: 'Joao',
        email: 'joao.algo@gmail.com',
        senha: 1234
    },
]

module.exports.listaUsuarios = function (req, res){
    res.json(users);
}

module.exports.obterUsuariosPorID = function (req, res){
    let id = req.params.id;

    let find_user = users.find(user => (user.id == id));
    if(find_user){
        res.status(200).json(find_user);
    }else{
        res.status(404).json({"mensagem": "Usuário não encontrado"});
    }
}

module.exports.inserirUser = function(req, res){
    let user = req.body;
    users.push(user);
    res.status(201).json(user);
}