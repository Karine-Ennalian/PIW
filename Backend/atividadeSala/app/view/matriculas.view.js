const view_alunos = require('./aluno.view');
const view_disciplina = require('./disciplina.view');

function render(matricula){
    return {
        id: matricula._id,
        aluno: view_alunos.render(matricula.aluno),
        disciplina: view_disciplina.render(matricula.disciplina),
    }
}

module.exports.render = render;

module.exports.renderMany = function (matriculas){
    return matriculas.map(render);
}