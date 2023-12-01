const express = require("express");
const routes_users = require("../app/routes/users.routes");
const routes_posts = require("../app/routes/posts.routes");

module.exports = function () {
    let app = express();
    
    app.set("port", 3001);
    app.use(express.static("./public"));
    app.use(express.json());
    app.use(express.urlencoded({ extended: false }));
    
    routes_users(app);
    routes_posts(app);
    
    return app;
}