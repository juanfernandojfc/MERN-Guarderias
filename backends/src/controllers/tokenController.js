const jsonwebtoken = require("jsonwebtoken");

const PRIVATE_KEY = "dahianaProyect2022"

class tokenController{
    constructor(){
        
    }

    getToken(req){
        //console.log(req.headers.authorization);
        let token = null;
        let authorization = req.headers.authorization.split(" ");
        if(authorization != null && authorization !=undefined){
            token = authorization[1]
        }
        return token;
    }

    verify = (token)=>{
        return jsonwebtoken.verify(token,PRIVATE_KEY);
    }
}
module.exports = {tokenController,PRIVATE_KEY };