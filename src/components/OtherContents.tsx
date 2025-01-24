import { Col, Container, ListGroup, Row } from "react-bootstrap"
import { ArrowRight } from "react-bootstrap-icons"

const OtherContents = function () {
  return (
    <Container className="mt-3 mb-5">
      <Row className="text-white mb-4">
        <Col>
          <h2 className="mb-1">Esplora</h2>
        </Col>
      </Row>
      <Row>
        <Col xs={12} lg={4}>
          <ListGroup.Item className="d-flex justify-content-between align-items-center text-danger GrayBackground rounded-2 my-3 py-4 px-3">
            Esplora per genere
            <ArrowRight />
          </ListGroup.Item>
          <ListGroup.Item className="d-flex justify-content-between align-items-center text-danger GrayBackground rounded-2 my-3 py-4 px-3">
            Decenni
            <ArrowRight />
          </ListGroup.Item>
          <ListGroup.Item className="d-flex justify-content-between align-items-center text-danger GrayBackground rounded-2 my-3 py-4 px-3">
            Attività e stati d'animo
            <ArrowRight />
          </ListGroup.Item>
        </Col>

        <Col xs={12} lg={4}>
          <ListGroup.Item className="d-flex justify-content-between align-items-center text-danger GrayBackground rounded-2 my-3 py-4 px-3">
            Worldwide
            <ArrowRight />
          </ListGroup.Item>
          <ListGroup.Item className="d-flex justify-content-between align-items-center text-danger GrayBackground rounded-2 my-3 py-4 px-3">
            Classifiche
            <ArrowRight />
          </ListGroup.Item>
          <ListGroup.Item className="d-flex justify-content-between align-items-center text-danger GrayBackground rounded-2 my-3 py-4 px-3">
            Audio spaziale
            <ArrowRight />
          </ListGroup.Item>
        </Col>
        <Col xs={12} lg={4}>
          <ListGroup.Item className="d-flex justify-content-between align-items-center text-danger GrayBackground rounded-2 my-3 py-4 px-3">
            Video musicali
            <ArrowRight />
          </ListGroup.Item>
          <ListGroup.Item className="d-flex justify-content-between align-items-center text-danger GrayBackground rounded-2 my-3 py-4 px-3">
            Nuovi artisti
            <ArrowRight />
          </ListGroup.Item>
          <ListGroup.Item className="d-flex justify-content-between align-items-center text-danger GrayBackground rounded-2 my-3 py-4 px-3">
            Hit del passato
            <ArrowRight />
          </ListGroup.Item>
        </Col>
      </Row>
    </Container>
  )
}

export default OtherContents
