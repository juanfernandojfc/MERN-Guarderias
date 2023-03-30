import React from 'react'
import { Container } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import Login from '../../Components/Login'
import Register from '../../Components/Register'
import fondo from '../../media/images/fondo-ancho-nubes.jpg'
const Auth = () => {
  return (
    <Container style={{'backgroundImage': `url(${fondo})`, 'justifyContent': "center"}}>
        <Link to="/">Home</Link>
        <Login></Login>
        <Register></Register>
    </Container>
  )
}

export default Auth