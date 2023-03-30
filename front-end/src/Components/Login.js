import React, { useContext, useState } from 'react'
import { Navigate, useNavigate } from "react-router-dom";
import { Form, Button, Alert, Container } from "react-bootstrap";
import AuthContext from '../Context/AuthContext';
import "./Components.css";



const Login = () => {

    const objForm = {
        email: "",
        password: ""
    }
    //contexto
    const { handleLogin } = useContext(AuthContext);
    const navigate = useNavigate();
    //estados
    const [form, setForm] = useState(objForm);

    const handleForm = (e) => {
        let tempForm = { ...form, [e.target.name]: e.target.value }
        setForm(tempForm);
    }

    const [show, setShow] = useState(false);

    const handleSubmit = async (e) => {
        e.preventDefault();
        let res = await handleLogin(form);
        if (res.status === 200) {
            //las credenciales corresponden obtener el tokem de la respuesta del servidor
            //una ves logueado y con respuesta correcta se usea el hook navigate para setear la ruta en "/"
            navigate('/')
        } else {
            setShow(true);
            
            //alert("credenciales invalidas");
        }

    }
    return (
        <Container id='loginform'>
            <h2>Login</h2>
            <Alert show={show} variant="danger">
                credenciales invalidas :(
            </Alert>
            <Form onSubmit={handleSubmit}>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control required onChange={handleForm} value={form.email} name="email" type="email" placeholder="Enter email" />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control required autoComplete="off" onChange={handleForm} value={form.password} name="password" type="password" placeholder="Password" />
                </Form.Group>

                <Button variant="primary" type="submit">
                    Log-in
                </Button>
            </Form>
        </Container>
    )
}

export default Login;