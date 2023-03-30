import React from 'react'
import { Link } from 'react-router-dom';
import Escuelas  from "../../Components/Escuelas";

const Home = () => {
  return (
    <div>
        
        <h2>HOME</h2>
        <Link to="/Auth">Auth</Link>
        <br></br>
        <Link to="/test">TestPage</Link>
        <Escuelas></Escuelas>
    </div>
  )
}

export default Home;