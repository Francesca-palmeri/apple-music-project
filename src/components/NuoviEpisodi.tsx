import { Col, Row } from "react-bootstrap"
import { ChevronRight, ExplicitFill } from "react-bootstrap-icons"

const NuoviEpisodi = function () {
  return (
    <>
      <Row className=" text-white">
        <div className="d-flex  mt-3 pb-1">
          <h2>
            Nuovi episodi radio{" "}
            <span className="">
              <ChevronRight />
            </span>
          </h2>
        </div>

        <Col xs={4} lg={2}>
          <img src="images/2a.png" alt="cover" className=" rounded-4 w-100" />
          <div className=" d-flex justify-content-between">
            <p>Prologo con Abuelo</p>
            <ExplicitFill />
          </div>
        </Col>
        <Col xs={4} lg={2}>
          <img src="images/2b.png" alt="cover" className=" rounded-4 w-100" />
          <p>The Wanderer</p>
        </Col>
        <Col xs={4} lg={2}>
          <img src="images/2c.png" alt="cover" className=" rounded-4 w-100" />
          <p>Michael Bublè & Carly Pearce</p>
        </Col>
        <Col xs={4} lg={2} className=" d-none d-lg-block">
          <img src="images/2d.png" alt="cover" className="rounded-4 w-100" />
          <p>Stephan Moccio: The Zane Lowe Interview</p>
        </Col>
        <Col xs={4} lg={2} className=" d-none d-lg-block">
          <img src="images/2e.png" alt="cover" className="rounded-4 w-100" />
          <p>Julia Michaels</p>
        </Col>
        <Col xs={4} lg={2} className=" d-none d-lg-block">
          <img src="images/2f.png" alt="cover" className="rounded-4 w-100" />
          <p>Karri & Travis Mills</p>
        </Col>
      </Row>
    </>
  )
}

export default NuoviEpisodi
