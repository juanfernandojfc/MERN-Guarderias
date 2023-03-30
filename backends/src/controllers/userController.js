const jsonTOKEN = require("jsonwebtoken") 

const User = require("../models/userModel");
const { PRIVATE_KEY } = require("./tokenController");

class userController {
    
    register(req, res) {
        let objUser = req.body;
        if (objUser.name && objUser.lastname && objUser.email && objUser.password) {
            User.create(objUser, (error, data) => {
                if (error) {
                    console.log("error al crear usuario => ", error);
                    res.status(500).json({ error })
                } else {
                    let tokenUser = jsonTOKEN.sign({email : objUser.email}, PRIVATE_KEY);
                    res.status(201).json({ info: "usuario creado",token : tokenUser });
                }
            });
        } else {
            res.status(400).json({ info: "envie los datos completos" });
        }
    }


    login(req, res){
        let {email, password} = req.body;
        User.findOne({email, password}, (error, data)=>{
            if(error){
                res.status(500).json({info: error})
            }else{
                console.log(data);
                if(data != null && data != undefined){
                    let token = jsonTOKEN.sign({email: data.email}, PRIVATE_KEY);
                res.status(200).json({token : token});
                }else{
                    res.status(401).json({info : "credenciales invalidad"})
                }
                
            }
        });
    }


    decodificar(req, res){
        let {token} = req.body;
        jsonTOKEN.verify(token, "dahiana2022", (error , decode)=>{
            if(error){
                res.status(401).json({info : "hay un error en el decoda"})
            }else{
                res.status(200).json({"resultado de la decodificacion" : decode});
            }
        });
    }
}

module.exports = userController;