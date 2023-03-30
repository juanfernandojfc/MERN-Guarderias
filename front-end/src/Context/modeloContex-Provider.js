import { createContext } from 'react'

const modeloContexto = createContext();


const modeloProvider = ({ children }) => {
    
    return <modeloContexto.Provider>{children}</modeloContexto.Provider>
}

export { modeloProvider };
export default modeloContexto;