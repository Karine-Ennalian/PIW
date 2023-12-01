function render(disciplina) {
    return {
        id: disciplina._id,
        nome: disciplina.nome,
        codigo: disciplina.codigo,
    }
}

module.exports.render = render;