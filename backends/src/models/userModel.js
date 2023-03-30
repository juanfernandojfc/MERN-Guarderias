const { Schema, model } = require("mongoose")

// const userSchema = Schema({modelo},{coleccion})

const userSchema = Schema({
    name: {
        type: String
    },
    lastname: {
        type: String
    },
    email: {
        type: String,
        unique: true
    },
    password:
    {
        type: String
    }
}, {
    collection: "usersEscuelas"
});

module.exports = model('User', userSchema); 