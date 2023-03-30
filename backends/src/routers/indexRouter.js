const {Router} = require('express')

class indexRouter{
    constructor(){
        this.router = Router();
        this.#config();
    }

    #config(){
        //configuracion y creacion de las rutas

        this.router.get('/', (req , res )=>{
            res.status(200).json({Message : "all ok"})
        });
    }
}

module.exports = indexRouter;