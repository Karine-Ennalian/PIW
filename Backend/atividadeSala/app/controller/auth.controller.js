const jwt = require("jsonwebtoken");

module.exports.checar_token = function(req, res, next){
    let token = req.headers.token;
    jwt.verify(token, 'senhasecreta', function(err, decoded){
        if(err){
            return res.status(401).send("Token inválido!");
        }else{
            next();
        }
    })
}