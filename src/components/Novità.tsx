import { Col, Container, Row } from "react-bootstrap"
import NuoviEpisodi from "./NuoviEpidosi"
import NuoveUscite from "./NuoveUscite"

const Novità = function () {
  return (
    <>
      <Container fluid>
        <Row className="text-white">
          <h2>Novità</h2>
          <Col xs={6}>
            <div>
              <p className=" text-white-50 mb-0">NUOVA STAZIONE RADIO</p>
              <p className=" lh-sm">
                Rilassati, al resto ci pensiamo noi. Ascolta Apple Music Chill
              </p>
            </div>
          </Col>
          <Col xs={6}>
            <div>
              <p className=" text-white-50 mb-0">NUOVA STAZIONE RADIO</p>
              <p className=" lh-sm">Ecco la nuova casa della musica latina</p>
            </div>
          </Col>
        </Row>
        <Row>
          <Col>
            <img
              src="images/1a.png"
              alt="Nuova stazione radio"
              className=" rounded-3 w-100"
            />
          </Col>
          <Col>
            <div>
              <img
                src="images/1b.png"
                alt="Nuova stazione radio"
                className=" rounded-3 w-100"
              />
            </div>
          </Col>
        </Row>
        <NuoviEpisodi />
        <NuoveUscite />
      </Container>
    </>
  )
}

export default Novità
