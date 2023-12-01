/*const modulo = require("./modulo");

console.log("Oi estou vivo e bem!");

console.log(modulo);
console.log(modulo.add(3, 7));*/

const http = require("http");
const express_app = require("./config/express");

let app = express_app();

http.createServer(express_app()).listen(app.get("port"),function(){
    console.log("Servidor está rodando na porta: " + app.get("port"));
});