import { Col, Container, Row } from "react-bootstrap"
import NuoviEpisodi from "./NuoviEpisodi"
import NuoveUscite from "./NuoveUscite"
import MusicFooter from "./MusicFooter"

const Novità = function () {
  return (
    <>
      <Container fluid className="px-5">
        <h2 className=" h1 text-white mt-5">Novità</h2>
        <Row className=" flex-nowrap text-white">
          <Col xs={12} lg={6}>
            <div>
              <p className=" text-white-50 mb-0">NUOVA STAZIONE RADIO</p>
              <p className=" lh-sm">
                Rilassati, al resto ci pensiamo noi. Ascolta Apple Music Chill
              </p>
            </div>
          </Col>
          <Col xs={12} lg={6}>
            <div>
              <p className=" text-white-50 mb-0">NUOVA STAZIONE RADIO</p>
              <p className=" lh-sm">Ecco la nuova casa della musica latina</p>
            </div>
          </Col>
        </Row>
        <Row className=" flex-nowrap">
          <Col xs={12} lg={6}>
            <img
              src="images/1a.png"
              alt="Nuova stazione radio"
              className=" rounded-3 w-100"
            />
          </Col>
          <Col xs={12} lg={6}>
            <img
              src="images/1b.png"
              alt="Nuova stazione radio"
              className=" rounded-3 w-100"
            />
          </Col>
        </Row>
        <NuoviEpisodi />
        <NuoveUscite />
      </Container>
      <MusicFooter />
    </>
  )
}

export default Novità
