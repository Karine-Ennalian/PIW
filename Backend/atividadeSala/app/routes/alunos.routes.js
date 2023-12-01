const alunos_controller = require("../controller/alunos.controller");
const auth_controller = require("../controller/auth.controller");

module.exports = function(app){
    // app.get("/alunos", controller.listaAluno);
    //app.get("/alunos", controller.listaAlunoFiltro);
    // {matricula, senha}
    app.post("/alunos/login", alunos_controller.login);
    app.post("/alunos", alunos_controller.inserirAlunos);

    app.use("/alunos", auth_controller.checar_token);
    app.get("/alunos/:id/matriculas", alunos_controller.obterMatriculasDeAluno);
    app.get("/alunos/:id", alunos_controller.obterAlunosID);
    app.get("/alunos", alunos_controller.obterAlunos);
}