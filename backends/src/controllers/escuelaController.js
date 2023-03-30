const jsonTOKEN = require("jsonwebtoken");
const escuela = require("../models/escuelaModel");
const { PRIVATE_KEY, tokenController } = require("./tokenController");

class escuelaController{

    constructor(){
        this.tokenController1 = new tokenController();
    }

    create = (req, res) =>{
        let {name, adress,district,tel,picture} = req.body;
        let usuario = jsonTOKEN.decode(this.tokenController1.getToken(req),PRIVATE_KEY);
        //console.log("USUARIO DEL TOKEN--->",usuario);
        escuela.create({name, adress,district,tel,picture, creator : usuario.email}, (error, data)=>{
            if(error){
                res.status(500).json({info: "error al crear escuela", Error: error});
            }else{
                res.status(201).json({info: "Escuela Creada."});
            }
        });

    }

    getEscuelas = (req, res) =>{
        escuela.find({},(error, data)=>{
            if(error){
                res.status(500).json({info: error});
            }else{
                res.status(200).json({data});
            }
        });
    }

    getEscuelasUsuario = (req, res) =>{

        let token = this.tokenController1.getToken(req);
       // console.log("verify del escuelas controller-> ",this.tokenController1.verify(token))
        let emailUsuario = this.tokenController1.verify(token).email
        //console.log("email del usuario --> ",emailUsuario)
        escuela.find({creator : emailUsuario},(error, data)=>{
            if(error){
                res.status(500).json({info: error});
            }else{
                res.status(200).json({data});
            }
        });
    }

    getEscuelasId = (req, res) =>{

        let token = this.tokenController1.getToken(req);
       // console.log("verify del escuelas controller-> ",this.tokenController1.verify(token))
        let idEscuela = req.body._id
        //console.log("email del usuario --> ",emailUsuario)
        escuela.find({_id : idEscuela},(error, data)=>{
            if(error){
                res.status(500).json({info: error});
            }else{
                res.status(200).json({data});
            }
        });
    }

    updateEscula = (req, res) =>{
        let {id, name, tel, adress} = req.body;  
        //para actualizar se debe enviar el token en la peticion para validar el usuario, junto con los datos a actualizar (nombre telefono direccion)
        let token = this.tokenController1.getToken(req);
        let usuarioUpdate = this.tokenController1.verify(token);
        escuela.findByIdAndUpdate({_id: id, creator: usuarioUpdate},{name : name, tel: tel, adress: adress}, (error, data)=>{
            if(error){
                res.status(500).json({error : error});
            }else{
                res.status(200).json({info: "escuela actualizada"});
            }
        });
    }

    deleteEscuela = (req, res) =>{
        let id = req.body.id;
        let token = this.tokenController1.getToken(req);
        let usuario = this.tokenController1.verify(token);
        escuela.findByIdAndDelete({_id: id, creator: usuario}, (error, data)=>{
            if(error){
                res.status(500).json({error: error});
            }else{
                res.status(200).json({info: "escuela eliminada --> ", data});
            }
        });
    }

}

module.exports = escuelaController;