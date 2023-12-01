const controllerPosts = require('../controller/posts.controller');

module.exports = function(app){
    app.get("/posts", controllerPosts.listaPosts);
    app.get("/posts/:id", controllerPosts.obterPostsPorID);
    
    app.post("/posts", controllerPosts.inserirPost);
}