let posts = [
    
    {
        id: 1,
        texto: 'Oi, tudo bem?',
        likes: 6
    },
    {
        id: 2,
        texto: 'Como você esta hoje?',
        likes: 6
    }
]

module.exports.listaPosts = function(req, res){
    res.json(posts);
}

module.exports.obterPostsPorID = function(req, res){
    let id = req.params.id;

    let find_post = posts.find(post => (post.id == id));
    if(find_post){
        res.status(200).json(find_post);
    }else{
        res.status(404).json({"mensagem": "Post não encontrado"});
    }
}

module.exports.inserirPost = function(req, res){
    let post = req.body;
    posts.push(post);
    res.status(201).json(post);
}