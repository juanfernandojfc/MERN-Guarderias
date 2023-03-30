import React, { useContext, useState } from 'react'
import { Card, Button, ListGroup, ListGroupItem } from "react-bootstrap";
import logo from '../../src/logo.svg'
import EscuelasContext from '../Context/EscuelasContext';
import './Components.css'
import ModalEscuelaUpdate from './ModalEscuelaUpdate';

const EscuelaCard = ({ id, name, tel, adress, district }) => {

    const {deleteEscuela} = useContext(EscuelasContext);

    const [show, setShow] = useState(false);

    const handleEdit = () => {
        setShow(true);
    }

    const handleDelete= () =>{
        let response = deleteEscuela({id});
        if (response.status ===200){
            alert("Escuela Eliminada");
        }
    }

    const handleClose = () => {
        setShow(false);
    }

    const handleCard= ()=>{
        // alert("evento al darle click a la carta");
    }

    return (
        <>
            <Card onClick={handleCard} className="card-escuela" border='secondary' style={{ width: '18rem' }}>
                <Card.Img  variant="top" src={logo} />
                <Card.Body>
                    <Card.Title>{name}</Card.Title>
                    <Card.Text>
                        <b>Servicios: </b> Some quick example text to build on the card title and make up the bulk of the card's content.
                    </Card.Text>
                    <ListGroup className="list-group-flush">
                        <ListGroupItem><b>Tel: </b>{tel}</ListGroupItem>
                        <ListGroupItem><b>Direccion: </b>{adress}</ListGroupItem>
                        <ListGroupItem><b>Barrio: </b>{district}</ListGroupItem>
                    </ListGroup>
                    <Button variant="info" onClick={handleEdit}>Actualizar</Button>
                    &nbsp;{/**para mostar un espacio entre los botones */}
                    <Button variant="danger" onClick={handleDelete}>Eliminar</Button>
                </Card.Body>
            </Card>

            {/****** Referenciar y mostrar el modal */}

            <ModalEscuelaUpdate show={show} handleClose={handleClose}  id={id} name={name} tel={tel} adress={adress} district={district}></ModalEscuelaUpdate>
        </>

    )
}

export default EscuelaCard