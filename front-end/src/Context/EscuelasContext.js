import { createContext, useEffect, useState } from 'react'
import { apiEscuelas } from './Api';

const EscuelasContext = createContext();

const EscuelaProvider = ({ children }) => {

    const [escuelas, setEscuelas] = useState([]);
    const [todasEscuelas, setTodasEscuelas] = useState([]);

    useEffect(() => {
        //getEscuelasUsuario();
        getTodasEscuelas();
    }, []);

    const handleCreate = async (objEscuela) => {
        let token = localStorage.getItem('token');
        let response = await fetch(`${apiEscuelas}/crear`, {
            method: 'POST',
            headers: {
                'content-type': 'application/json',
                Authorization: `Bearer ${token}`
            },
            body: JSON.stringify(objEscuela)
        });
        getEscuelasUsuario();
        return response;
    }

    const updateEscuela = async (objEscuela) => {
        let token = localStorage.getItem('token');
        let response = await fetch(`${apiEscuelas}/actualizar`, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json',
                Authorization: `Bearer ${token}`
            },
            body: JSON.stringify(objEscuela)
        });
        getEscuelasUsuario();
        return response.status;
    }

    const getEscuelasUsuario = async () => {
        let token = localStorage.getItem('token');
        let response = await fetch(`${apiEscuelas}/mis-escuelas`, {
            method: 'POST',
            headers: {
                'content-type': 'application/json',
                Authorization: `Bearer ${token}`
            }
        });
        if (response.status === 200) {
            let datos = await response.json();
            setEscuelas(datos.data);
        }else{
            console.log("error en get escuelas usuario- escuelas context")
            console.log("el response----------------,", response);
        }
        return response;
    }

    const getTodasEscuelas = async()=>{
        ///se evia el token del usuario ruta host/escuelas/consultar tipo de peticioin get
        let token = localStorage.getItem('token');
        let response = await fetch(`${apiEscuelas}/consultar`,{
            method: 'GET',
            headers: {
                'content-type': 'application/json',
                Authorization: `Bearer ${token}`
            }
        });
        
        if (response.status ===200){
            let datos = await response.json();
            //console.log("DATOS:",datos.data)
            setTodasEscuelas(datos.data);
        }else{
            console.log("error en getTodasEscuelas")
        }

    }


    const deleteEscuela = async (id) => {
        //enviar id y token para eliminacion ruta host/escuelas/eliminar
        //se debe recibir id como tipo objeto no valor
        let token = localStorage.getItem('token');
        let response = await fetch(`${apiEscuelas}/eliminar`, {
            method: "DELETE",
            headers: {
                'content-type': 'application/json',
                Authorization: `Bearer ${token}`
            },
            body: JSON.stringify(id)
        });
        if (response.status === 200) {
            console.log("escuela eliminada");
            getEscuelasUsuario();

            return response;
        }
    }




    const data = { handleCreate, escuelas, todasEscuelas, updateEscuela, getEscuelasUsuario, deleteEscuela ,getTodasEscuelas}
    return <EscuelasContext.Provider value={data}>{children}</EscuelasContext.Provider>
}

export { EscuelaProvider };
export default EscuelasContext;