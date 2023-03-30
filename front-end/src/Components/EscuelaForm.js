import React, { useContext, useState } from 'react'
import { Form, Button, Row, Col, Alert } from 'react-bootstrap'
import EscuelasContext from '../Context/EscuelasContext';
import "./Components.css";
let objForm = {
    id: "",
    name: "",
    adress: "",
    tel: "",
    district: ""
}

const EscuelaForm = () => {

    const { handleCreate } = useContext(EscuelasContext);
    const [form, setForm] = useState(objForm);
    const [show, setShow] = useState(false);
    
    const handleForm = (e) => {
        let tempForm = { ...form, [e.target.name]: e.target.value};
        setForm(tempForm);
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        let response = await handleCreate(form);
        if (response.status === 201) {
            setShow(true);
            setForm(objForm);
            setTimeout(() => {
                setShow(false);
                
            }, 3000);
        }
    }

    return (
        <div>
            <h2>formulario de creacion de escuelas</h2>
            <Alert show={show} variant="info">
                Escuela Creada :)
            </Alert>
            <Form className='create-Escuela' onSubmit={handleSubmit}>
                <Row>
                    <Col>
                        <Form.Group className="mb-3" >
                            <Form.Label htmlFor='name'>Nombre Escuela</Form.Label>
                            <Form.Control required value={form.name} onChange={handleForm} id="name" name="name" type="text" placeholder="Nombre de la escuela" />
                        </Form.Group>
                    </Col>
                    <Col>
                        <Form.Group className="mb-3" >
                            <Form.Label htmlFor='tel'>telefono:</Form.Label>
                            <Form.Control required value={form.tel} onChange={handleForm} id="tel" name="tel" type="number" placeholder="Telefono" />
                        </Form.Group>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <Form.Group className="mb-3" >
                            <Form.Label htmlFor='adress'>Direccion Escuela</Form.Label>
                            <Form.Control required value={form.adress} onChange={handleForm} id="adress" name="adress" type="text" placeholder="Direccion" />
                        </Form.Group>
                    </Col>
                    <Col>
                        <Form.Group className="mb-3" >
                            <Form.Label htmlFor='district'>Barrio Escuela</Form.Label>
                            <Form.Control required value={form.district} onChange={handleForm} id="district" name="district" type="text" placeholder="Barrio" />
                        </Form.Group>
                    </Col>
                </Row>
                <Button variant='primary' type='submit'>Crear Escuela</Button>
            </Form>
        </div>
    )
}

export default EscuelaForm