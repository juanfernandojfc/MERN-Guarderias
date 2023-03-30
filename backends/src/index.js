const express = require("express");
const morgan = require("morgan");
const cors = require("cors")


const connDB = require("./DB/conectDB");
const escuelaRouter = require("./routers/escuelaRoutrer");
const indexRouter = require("./routers/indexRouter");
const userRouter = require("./routers/userRoute");

class Server {
    constructor() {
        this.objDBconn = new connDB();
        this.app = express();
        this.#config();

    }

    #config() {
        //morgan para monitoreo de las peticiones http
        this.app.use(morgan());
        //permitir conexiones de origen cruzado
        this.app.use(cors());

        // usar datos en formato json
        this.app.use(express.json());


        //puerto del enviroment o por defecto 
        this.app.set('PORT', process.env.PORT || 3000);

        //crear rutas
        const indexR = new indexRouter();
        const userR = new userRouter();
        const escuelaR = new escuelaRouter();

        //agregar rutas a express
        this.app.use(indexR.router);
        this.app.use(userR.router);
        this.app.use(escuelaR.router);

        //servidor a la escucha
        this.app.listen(this.app.get('PORT'), () => {
            console.log("servidor escuchando por el puerto: ", this.app.get('PORT'))
        });
    }
}
new Server();

// ********** estoy terminando de configurar los metodos para la creacion de las escuelas (video: repaso node2 tokens 1:37:00)