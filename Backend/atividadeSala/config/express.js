const express = require('express');
const routes_alunos = require("../app/routes/alunos.routes");
const routes_matriculas = require("../app/routes/matriculas.routes");
const routes_disciplinas = require("../app/routes/disciplinas.routes");

module.exports = function () {
    let app = express();
    
    app.set("port", 3000);

    app.use(express.static("./public"));
    app.use(express.json());
    app.use(express.urlencoded({ extended: false }));
    
    routes_alunos(app);
    routes_matriculas(app);
    routes_disciplinas(app);
    
    return app;
}