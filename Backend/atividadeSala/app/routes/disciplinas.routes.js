const controller = require("../controller/disciplina.controller");

module.exports = function(app){
    app.post("/disciplina", controller.inserirDisciplina);
}