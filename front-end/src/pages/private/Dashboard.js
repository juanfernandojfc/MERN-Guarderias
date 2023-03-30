import React from 'react'
import { Navbar, Container, Nav, Button} from 'react-bootstrap';
import { Outlet, Link, NavLink } from 'react-router-dom';
import logo from '../../logo.svg'
import  handleLogOut from "../../Context/AuthContext";
import Footer from '../../Components/Footer.js'

const Dashboard = () => {
  const logout = (e)=>{
    console.log("hola buton loghout")
    localStorage.removeItem("token");
    handleLogOut();
  }
  return (
    <>
      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="/">
            <img
              alt=""
              src={logo}
              width="30"
              height="30"
              className="d-inline-block align-top"
            />{' '}
            React Dahiana
          </Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link as={Link} to="/" >Home</Nav.Link>
            <Nav.Link as={Link} to="/escuelas">Escuelas</Nav.Link>
            <Nav.Link as={Link} to={"/map"}>map</Nav.Link>
          </Nav>

          <Nav>
            <Nav.Link as={Link} to="/" onClick={logout}>Log-Out</Nav.Link>
          </Nav>
        </Container>

      </Navbar>
      
      {/**cargar componentes hijos referenciados en las rutas anidadas */}
      <Outlet></Outlet>
      <Footer></Footer>
    </>
  )
}

export default Dashboard;