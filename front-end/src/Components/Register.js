import React, { useContext, useState } from 'react';
import { Form, Button, Row, Col } from "react-bootstrap";
import AuthContext from '../Context/AuthContext';
import "./Components.css";


const objForm = {
    name: "",
    lastname: "",
    email: "",
    password: ""
};

const Register = () => {

    //CONTEXTO......
    const { handleRegister } = useContext(AuthContext);
    //CREAR ESTADOS...


    const [form, setForm] = useState(objForm);

    const handleForm = (e) => {
        let obj = { ...form, [e.target.name]: e.target.value };
        setForm(obj);
    }

    const handleSubmit = (e) => {
        e.preventDefault(); //prevenir la recarga de la pagina

        //manejo del objeto haciendo uso del contexto de autenticacion
        handleRegister(form);

        //inicializar el estado (limpiar el formulario)
        setForm(objForm);

    }

    return (
        <div id='loginform' style={{backgroundColor: "#B9F8D3"}}>
            <Form onSubmit={handleSubmit}>
                <Row>
                    <Col>
                        <Form.Group className="mb-3" controlId="name">
                            <Form.Label>Name </Form.Label>
                            <Form.Control required value={form.name} onChange={handleForm} name="name" type="text" placeholder="escribe tu nombre" />
                        </Form.Group>
                    </Col>
                    <Col>
                        <Form.Group className="mb-3" controlId="lastname">
                            <Form.Label>Apellido </Form.Label>
                            <Form.Control required value={form.lastname} onChange={handleForm} name="lastname" type="text" placeholder="escribe tu apellido" />
                        </Form.Group>
                    </Col>
                </Row>

                <Row>
                    <Col>
                        <Form.Group className="mb-3" controlId="email">
                            <Form.Label>Email</Form.Label>
                            <Form.Control required value={form.email} onChange={handleForm} name="email" type="email" placeholder="Escribe tu email" />
                        </Form.Group>
                    </Col>

                    <Col>
                        <Form.Group className="mb-3" controlId="password">
                            <Form.Label>Clave</Form.Label>
                            <Form.Control required autoComplete="off" value={form.password} onChange={handleForm} name="password" type="password" placeholder="Escribe tu clave" />
                        </Form.Group>
                    </Col>
                </Row>
                <Button variant="primary" type="submit">
                    Registrar
                </Button>
            </Form>
        </div>
    )
}

export default Register