const { Router } = require("express");
const escuelaCTRL = require("../controllers/escuelaController");
const { tokenController } = require("../controllers/tokenController");

class escuelaRouter {

    constructor() {
        this.router = Router();
        this.#config();
    }

    #config() {
        
        //METODO PARA QUE TODAS LAS PETICIONES LAS REALICE UN USUARIO LOGUEADO
        //funcion middleware(se ejecuta cada vez que se hace una peticion)
        // this.router.use((req, res, next) => {
        //     // console.log("-------funcion middleware escuelaRouter-------------")
        //     let objTokenController = new tokenController();
        //     let token = objTokenController.getToken(req)
        //     if (objTokenController.verify(token)) {
        //         // console.log("NEXT EN CONFIG ESCUELA ROUTER BACKEND--------------------- ----------------------------------------")
        //         next();
        //     } else {
        //         res.status(401).json({ info: "requiere autenticacion" });
        //         // console.log("ERROR EN CONFIG ESCUELA ROUTER BACKEND-------------------------------------------------------------")
        //     }

        // });


        this.objEscuelaCTRL = new escuelaCTRL();
        this.router.post("/escuelas/crear", this.objEscuelaCTRL.create);
        this.router.get("/escuelas/consultar", this.objEscuelaCTRL.getEscuelas);
        this.router.post("/escuelas/mis-escuelas", this.objEscuelaCTRL.getEscuelasUsuario);
        this.router.put("/escuelas/actualizar", this.objEscuelaCTRL.updateEscula);
        this.router.delete("/escuelas/eliminar", this.objEscuelaCTRL.deleteEscuela);
    }
}

module.exports = escuelaRouter;