import { Container, Row, Col } from "react-bootstrap"

const MusicFooter = function () {
  return (
    <footer className="bg-dark text-white py-3">
      <Container>
        <Row className="flex-column">
          <Col className="text-center ">
            <a href="#" className="text-white mx-2">
              Italia
            </a>{" "}
            |
            <a href="#" className="text-white mx-2">
              English (UK)
            </a>
          </Col>

          <Col className="text-center">
            <p>Copyright © 2024 Apple Inc. Tutti i diritti riservati.</p>
          </Col>

          <Col className="text-center">
            <a href="#" className="text-white mx-2">
              Condizioni dei servizi internet
            </a>{" "}
            |
            <a href="#" className="text-white mx-2">
              Apple Music e privacy
            </a>{" "}
            |
            <a href="#" className="text-white mx-2">
              Avviso sui cookie
            </a>{" "}
            |
            <a href="#" className="text-white mx-2">
              Supporto
            </a>{" "}
            |
            <a href="#" className="text-white mx-2">
              Feedback
            </a>
          </Col>
        </Row>
      </Container>
    </footer>
  )
}

export default MusicFooter
