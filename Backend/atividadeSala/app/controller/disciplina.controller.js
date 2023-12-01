const Disciplina = require("../model/disciplina.model");

module.exports.inserirDisciplina = function(req, res){
    let disciplina = req.body;
    let promise = Disciplina.create(disciplina);
    promise.then(
        function(disciplina){
            res.status(201).json(disciplina);
        }
    ).catch(
        function(error){
            res.status(500).json(error);
        }
    )
};