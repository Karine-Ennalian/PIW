const controller = require("../controller/matriculas.controller");

module.exports = function(app){
    app.get("/matriculas", controller.obterMatriculas);

    app.post("/matriculas", controller.inserirMatricula);
}