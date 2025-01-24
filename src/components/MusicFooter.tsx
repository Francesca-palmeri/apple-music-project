import { Container, Row, Col } from "react-bootstrap"

const MusicFooter = function () {
  return (
    <footer>
      <Container
        fluid
        className="text-white py-3 "
        style={{ backgroundColor: "#323232" }}
      >
        <Row className="flex-column">
          <Col className="text-start ">
            <div className=" d-flex ">
              <p className="text-white mx-2">Italia</p>|
              <p className="text-white mx-2">
                <span className="text-white-50 ">English (UK)</span>
              </p>
            </div>
          </Col>
          <Col className="text-start mx-2">
            <p>
              <span className="text-white-50">Copyright © 2024 </span>Apple Inc.
              <span className="text-white-50">Tutti i diritti riservati.</span>
            </p>
          </Col>
          <Col xs={12} className=" d-flex flex-wrap text-start ">
            <p className="text-white mx-2">
              Condizioni dei servizi internet{" "}
              <span className="text-white-50">|</span>
            </p>
            <p className="text-white mx-2">
              Apple Music e privacy <span className="text-white-50">|</span>
            </p>
            <p className="text-white mx-2">
              Avviso sui cookie <span className="text-white-50">|</span>
            </p>
            <p className="text-white mx-2">
              Supporto <span className="text-white-50">|</span>
            </p>
            <p className="text-white mx-2">
              Feedback <span className="text-white-50">|</span>
            </p>
          </Col>
        </Row>
      </Container>
    </footer>
  )
}

export default MusicFooter
