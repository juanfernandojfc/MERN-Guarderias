const {Router} = require("express");
const userCTRL = require("../controllers/userController")
class userRouter{

    constructor(){
        this.router = Router();
        this.#config();
    }

    #config(){
        const objUserCTRL= new userCTRL();
        this.router.post("/user", objUserCTRL.register); 
        this.router.post("/userTest", objUserCTRL.decodificar);
        this.router.post("/userAuth", objUserCTRL.login);
    }
}

module.exports = userRouter;