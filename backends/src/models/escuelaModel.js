const { Schema, model } = require("mongoose")

// cons escuelaSchema = Schema({modelo},{coleccion})

const escuelaSchema = Schema({
    name: {
        type: String
    },
    adress:{
        type: String
    },
    district:{
        type : String
    },
    tel:{
        type: String
    },
    picture:{
        type: String
    },
    creator:{
        type: String
    }
},{
    collection : "escuelas"
});

module.exports = model('Escuela', escuelaSchema); 