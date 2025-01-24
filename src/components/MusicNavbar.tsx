import { useState } from "react"
import {
  Navbar,
  Nav,
  Container,
  Offcanvas,
  Row,
  Col,
  Form,
} from "react-bootstrap"
import Novità from "./Novità"
import { Broadcast, Grid, House } from "react-bootstrap-icons"

const MusicNavbar = function () {
  const [show, setShow] = useState(false)

  const handleClose = () => setShow(false)
  const handleShow = () => setShow(true)

  return (
    <>
      <Navbar className="GrayBackground" variant="dark" expand="lg">
        <Container fluid>
          <Navbar.Toggle
            aria-controls="offcanvas-navbar"
            onClick={handleShow}
          />
          <Navbar.Brand href="#">
            <img
              src="logos/apple.svg"
              className="d-inline-block align-top"
              alt="Logo"
            />
            Music
          </Navbar.Brand>
          <Nav.Link href="#" className="text-danger">
            Accedi
          </Nav.Link>
        </Container>
      </Navbar>

      <Offcanvas show={show} onHide={handleClose} placement="start">
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>Menu</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          <Nav className="flex-column">
            <Nav.Link href="#">Home</Nav.Link>
            <Nav.Link href="#">Novità</Nav.Link>
            <Nav.Link href="#">Radio</Nav.Link>
          </Nav>
        </Offcanvas.Body>
      </Offcanvas>

      <Container fluid>
        <Row>
          <Col lg={2} className="d-none d-lg-block GrayBackground sidebar">
            <Nav className="flex-column p-3 text-white">
              <Form className="d-flex">
                <Form.Control
                  type="search"
                  placeholder="Cerca"
                  className="me-2 bg-dark text-white"
                />
              </Form>
              <Nav.Link href="#" className="text-white">
                <House className=" text-danger me-2 align-baseline p-0 " />
                Home
              </Nav.Link>
              <Nav.Link href="#" className="text-white">
                <Grid className=" text-danger me-2 align-baseline p-0 " />
                Novità
              </Nav.Link>
              <Nav.Link href="#" className="text-white">
                <Broadcast className=" text-danger me-2 align-baseline p-0 " />
                Radio
              </Nav.Link>
              <Nav.Link href="#" className="text-danger">
                {/*Inserire player qui*/}
              </Nav.Link>
            </Nav>
          </Col>
          <Col lg={10} className="px-0">
            <Novità />
          </Col>
        </Row>
      </Container>
    </>
  )
}

export default MusicNavbar
