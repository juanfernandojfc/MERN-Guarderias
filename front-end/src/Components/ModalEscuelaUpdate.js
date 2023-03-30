import React, { useContext, useEffect, useState } from 'react'
import { Modal, Button, Form, Row, Col } from "react-bootstrap";
import EscuelasContext from '../Context/EscuelasContext';

let objForm = {
    id: "",
    name: "",
    adress: "",
    tel: "",
    district: ""
}

const ModalEscuelaUpdate = ({ show, handleClose, id, name, tel, adress, district }) => {


    useEffect(()=>{
        setForm({name, tel, adress, district})
    }, [name,tel,adress,district])

    const [form, setForm] = useState(objForm);

    const {updateEscuela} = useContext(EscuelasContext);

    const handleForm = (e) => {
        let tempForm = { ...form, [e.target.name]: e.target.value, id : id};
        setForm(tempForm);
    }
    const handleEdit = ()=>{
        updateEscuela(form);
        setForm(objForm);
        handleClose();
    }

    return (
        <Modal
            show={show}
            onHide={handleClose}
            backdrop="static"
            keyboard={false}
        >
            <Modal.Header closeButton>
                <Modal.Title>Editar Informacion de Escuela</Modal.Title>
            </Modal.Header>
            <Modal.Body>
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

            </Modal.Body>
            <Modal.Footer>
                <Button variant="outline-dark" onClick={handleClose}>
                    Cancelar
                </Button>
                <Button variant="info" onClick={handleEdit} >Actualizar</Button>
            </Modal.Footer>
        </Modal>
    )
}

export default ModalEscuelaUpdate;