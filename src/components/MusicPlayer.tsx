import { Col, Container, ProgressBar, Row } from "react-bootstrap"

const MusicPlayer = function () {
  return (
    <>
      <Container>
        <Row className=" justify-content-evenly py-5 px-5">
          <Col></Col>
          <Col>
            <ProgressBar variant="info" now={20} />
          </Col>
          <Col></Col>
        </Row>
      </Container>
    </>
  )
}

export default MusicPlayer
