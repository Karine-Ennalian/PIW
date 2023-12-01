const mongoose = require('mongoose');

module.exports = function(){
    let schema = mongoose.Schema({
        nome:{
            type:String,
            required: true
        },
        codigo:{
            type:String,
            required: true
        }
    })
    return mongoose.model('Disciplina', schema);
}();