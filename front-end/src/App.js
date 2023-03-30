import { useContext } from 'react';
import './App.css';
import AuthContext from './Context/AuthContext';
import { EscuelaProvider } from './Context/EscuelasContext';
import AuthRouter from './routers/AuthRouter';
import UnAuthRouter from './routers/UnAuthRouter';

function App() {

  const {auth} = useContext(AuthContext);
   //si el usuario esta autenticado AuthRouter sino UnAuthRouter */

   //empaquetamos AuthRouter dentro del contexto de las escuelas para que los usuarios autenticados tengan acceso a la gestion de escuelas
  return (
    <div className="App">
      {auth ? <EscuelaProvider><AuthRouter/></EscuelaProvider>  : <EscuelaProvider><UnAuthRouter/></EscuelaProvider> }
    </div>
  );
}

export default App;
