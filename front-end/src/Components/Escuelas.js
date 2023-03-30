import React, { useContext, useEffect } from 'react'
import EscuelasContext from '../Context/EscuelasContext'
import { Row, Col, Container, CardGroup } from "react-bootstrap";
import EscuelaCard from './EscuelaCard';
import logo from '../media/images/fondo-ancho-nubes.jpg'
const Escuelas = () => {

  const { getTodasEscuelas, todasEscuelas } = useContext(EscuelasContext);

  useEffect(() => {
    getTodasEscuelas();
    //console.log("useefect todas las escuelas")
  }, []);


  return (
    <div>
      <Container fluid={"md"} style={{ backgroundImage: `url(${logo})` }}>
        <h1> contenedor prueba </h1>
      </Container>
      <Container>
        <h2>Todas Las Escuelas Creadas</h2>
        <Row xs={1} md={2} xl={3} xxl={3} className="g-6 contenedor-cards">
          {
            todasEscuelas.map((e) => {
              return <EscuelaCard className="cards" key={e._id} id={e._id} name={e.name} tel={e.tel} adress={e.adress} district={e.district}></EscuelaCard>
            })
          }
        </Row>
      </Container>
    </div>

  )
}

export default Escuelas