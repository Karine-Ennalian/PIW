const controllerUsers = require("../controller/users.controller");

module.exports = function(app){
    app.get("/usuarios", controllerUsers.listaUsuarios);
    app.get("/usuarios/:id", controllerUsers.obterUsuariosPorID);

    app.post("/usuarios", controllerUsers.inserirUser);
}