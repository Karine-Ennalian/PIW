// let alunos = [
//     {
//             id: 1,
//             nome: "John",
//             matricula: 1234,
//             ira: 3000
//     },
//     {
//         id: 2,
//         nome: "Jane",
//         matricula: 4567,
//         ira: 6000
//     },
//     {
//         id: 3,
//         nome: "Felix",
//         matricula: 4567,
//         ira: 8000
//     }
// ]

// module.exports.listaAluno = function (req, res){
//     res.json(alunos);
// }

// module.exports.obterAluno = function(req, res){
//     let id = req.params.id;
    
//     //let aluno_procurado = alunos.find(function (aluno){
//     //    return aluno.id == id;
//     //});

//     //let aluno_procurado = alunos.find(aluno => {
//     //    return aluno.id == id;
//     //});

//     //let aluno_procurado = alunos.find(aluno => (aluno.id == id)});
    
//     let aluno_procurado = null;

//     for (let i = 0; i < alunos.length; i++) {
//         if(alunos[i].id == id){
//             aluno_procurado = alunos[i];
//         }
//     }
//     if(aluno_procurado == null){
//         res.status(404).json({"mensagem": "Aluno não encontrado"});
//     }else{
//         res.status(200).json(aluno_procurado);
//     }
// }

// module.exports.listaAlunoFiltro = function(req, res){
//     //let aluno_filtrados = [];
//     //for(let i = 0; i<alunos.length; i++){
//     //    aluno_filtrados.push(alunos[i]);
//     //}

//     let aluno_filtrados = [...alunos];

//     if (req.query.min_ira) {
//         let min_ira = req.query.min_ira;
//         aluno_filtrados = aluno_filtrados.filter((aluno)=>(aluno.ira>min_ira));
//     }
//     res.json(aluno_filtrados);

//     if (req.query.max_ira) {
//         let max_ira = req.query.max_ira;
//         aluno_filtrados = aluno_filtrados.filter((aluno)=>(aluno.ira<max_ira));
//     }
// }

// module.exports.inserirAlunos = function(req, res){
//     let aluno = req.body;
//     alunos.push(aluno);
//     res.status(201).json(aluno);
// }

// module.exports.obterMatriculaDeAlunos = function(req, res){
//     let id = req.params.id;
//     let matriculaAluno = [];
//     for(let i = 0; i < matriculas.length; i++){
//         if(matriculas[i].aluno==id){
//             matriculaAluno.push(matricula[i]);
//         }
//     }
//     res.json(matriculaAluno);
// }

// PARTE COM O BANCO DE DADOS
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

const Aluno = require("../model/aluno.model");
const view_alunos = require("../view/aluno.view");

module.exports.obterAlunos = function(req, res){
    let promise = Aluno.find().exec();
    promise.then(
        function(alunos){
            res.status(200).json(view_alunos.renderMany(alunos));
        }
    ).catch(
        function(error){
            res.status(500).json(error);
        }
    )
};

module.exports.obterAlunosID = function(req, res){
    let id = req.params.id;
    let promise = Aluno.findById(id).exec();
    promise.then(
        function(aluno){
            res.status(200).json(view_aluno.render(aluno));
        }
    ).catch(
        function(error){
            res.status(500).json(error);
        }
    )
};

module.exports.inserirAlunos = function(req, res){
    let aluno = req.body;
    aluno = {
        nome: aluno.nome,
        matricula: aluno.matricula,
        senha: bcrypt.hashSync(aluno.senha, 10)
    };
    let promise = Aluno.create(aluno);
    promise.then(
        function(aluno_){
            res.status(201).json(view_aluno.render(aluno_));
        }
    ).catch(
        function(error){
            res.status(500).json(error);
        }
    )
};

module.exports.login = function(req, res){
    let info_login = req.body;
    let promise = Aluno.findOne({matricula: info_login.matricula});
    promise.then(
        function(aluno){
            if(bcrypt.compareSync(info_login.senha, aluno.senha)){
                let token = jwt.sign(
                    {
                        id: aluno._id,
                        matricula: aluno.matricula
                    }
                ,'senhasecreta');
                res.status(201).json({token: token});
            }else{
                res.status(401).send("Login falhou!");
            }
        }
    ).catch(
        function(error){
            res.status(401).send("Login falhou!");
        }
    )
};

module.exports.obterMatriculasDeAlunos = function(req, res){
    let id_url = req.params.id;

    let token = req.headers.token;
    let payload = jwt.decode(token);
    let id_token = payload.id;
    console.log(id_token);
    if(id_url == id_token){
        let promise = Aluno.findById(id_url);
        promise.then(
            function(aluno){
                res.status(200).json(view_aluno.render(aluno));
            }
        ).catch(
            function(error){
                res.status(500).send(error);
            }
        )
    }else{
        res.status(401).send("Não autorizado!");
    }
};
