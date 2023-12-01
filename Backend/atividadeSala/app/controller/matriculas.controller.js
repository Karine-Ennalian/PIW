// let matriculas = [
//     {
//         id: 1,
//         aluno: 2,
//         disciplina: "QXD001",
//     },
//     {
//         id: 2,
//         aluno: 1,
//         disciplina: "QXD002",
//     }
// ]

// module.exports.matriculas = matriculas;

// module.exports.obterMatriculas = function(req, res){
//     res.json(matriculas);
// }

//PARTE COM O BANCO DE DADOS
// CÓDIGO COM O BANCO DE DADOS
//const { restart } = require("nodemon");
const jwt = require("jsonwebtoken");

const Matricula = require("../model/matricula.model");
const view_matricula = require("../view/matriculas.view");

module.exports.inserirMatricula = function(req, res){
    let id_disciplina = req.body.disciplina;
    let token = req.headers.token;
    let payload = jwt.decode(token);
    let matricula = {
        disciplina: id_disciplina,
        aluno: payload.id
    };
    let promise = Matricula.create(matricula);
    promise.then(
        function(matricula_){
            res.status(201).json(view_matricula.render(matricula_));
        }
    ).catch(
        function(error){
            res.status(500).json(error);
        }
    )
};

module.exports.obterMatriculas = function(req, res){
    let token = req.headers.token;
    let payload = jwt.decode(token);
    let id_usuario = payload.id;
    let promise = Matricula.find({aluno: id_usuario})
                    .populate("disciplina")
                    .populate("aluno")
                    .exec();
    promise.then(
        function(matriculas){
            res.status(200).json(view_matricula.renderMany(matriculas));
        }
    ).catch(
        function(error){
            res.status(500).json(error);
        }
    )
};