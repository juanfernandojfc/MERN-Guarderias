const mongoose = require("mongoose");
const { DB_Mongo, DB_Mongo_2 } = require("./urlDB");
class connDB {

    constructor() {
        this.conection();
    }

    async conection() {
        this.conn = await mongoose.connect(DB_Mongo_2);
    }
}
module.exports = connDB;