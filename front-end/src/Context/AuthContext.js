import { createContext, useState, useEffect } from "react";
import { apiLogin, apiRegister } from "./Api";
import { Navigate } from "react-router-dom";

const AuthContext = createContext(); //representa el contexto 
//el contexto necesita un proveedor(Provider) que retorna componente JSX
//todos los componenetes que estaran encapsulados por el contexto seran hijos de este componente jsx retornado
//entonces el los recibe como parametro y en el retorno los contiene dentro del componente

const AuthProvider = ({ children }) => {


    const [auth, setAuth] = useState(false);

    //funcion que se ejecuta cuando se crea el componente
    useEffect(() => {
        //console.log("esta cambiando el DOM desde REACT ")
        //usaremos el token guardado en e local storage para saber si la sesion sigue activa o no
        let token = localStorage.getItem('token');
        if (token) {
            setAuth(true);
        }
    }, []);

    const handleRegister = (objUser) => {
        //realizar una peticion al servidor
        //fetch recibe{dominio},{opciones de la conexion}
        fetch(apiRegister, {
            method: "POST",
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(objUser)//especificar que los datos se van a enviar en json en la peticion
        }).then(async (res) => {
            if (res.status === 201) {
                let json = await res.json();

                //almacenamos token en local storage para mantener la sesion en otras pestañas
                localStorage.setItem('token', json.token);
                //como el usuario ya esta logueado, toncs su estado de auth cambia a true
                setAuth(true);
            }
        }).catch(error => {
            console.log("error front al rgistrar ", error);
        });
    }


    const handleLogin = async (objUser) => {

        let res = await fetch(apiLogin, {
            method: "POST",
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(objUser)
        });
        if (res.status === 200) {
            let json = await res.clone().json(); //se debe colnar la respuesta para evitar un error "body stream is locked"
            //console.log("respuesta JSON", json)
            localStorage.setItem('token', json.token);
            setAuth(true);
        }
        return res;
    }

    const handleLogOut = () => {
        setAuth(false);
    }

    //no se recomienda enviar setAuth en "data" por que es recomendable que solo el dueño del estado lo pueda modificar
    const data = { handleRegister, handleLogin, auth, handleLogOut };
    return <AuthContext.Provider value={data}>{children}</AuthContext.Provider>
}

export { AuthProvider };
export default AuthContext;