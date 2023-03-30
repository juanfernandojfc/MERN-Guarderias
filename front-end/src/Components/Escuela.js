import React, { useContext, useEffect } from 'react'
import EscuelasContext from '../Context/EscuelasContext';
import EscuelaCard from './EscuelaCard';
import EscuelaForm from './EscuelaForm';
import { Row, Container, Col, CardGroup } from 'react-bootstrap'
import './Components.css'

const Escuela = () => {
  //key={e._id} id={e._id} name={e.name} tel={e.tel} adress={e.adress} district={e.district}
  const { escuelas, getEscuelasUsuario } = useContext(EscuelasContext);

  useEffect(() => {
    getEscuelasUsuario();
  }, []);
  return (
    <Container>

      <Row><EscuelaForm></EscuelaForm></Row>
      <h2>Mis Escuelas Creadas</h2>
      <Row xs={1} md={2} xl={3} xxl={3} className="g-6 contenedor-cards">
        {
          escuelas.map((e) => {
            return <EscuelaCard className="card" key={e._id} id={e._id} name={e.name} tel={e.tel} adress={e.adress} district={e.district}></EscuelaCard>
          })
        }

      </Row>
      <CardGroup className="contenedor-cards" xs={1} md={2} xxl={2}>


      </CardGroup>

    </Container >
  )
}

export default Escuela;