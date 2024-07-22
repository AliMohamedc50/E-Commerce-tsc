import { Category } from "@components/eCommerce"
import { Col, Container, Row } from "react-bootstrap"

function Categories() {
  return (
    <Container>
      <Row>
        <Col xs={6} md={4} xl={3} className="d-flex justify-content-center mb-5 mt-2">
        <Category />
        </Col>
        <Col xs={6} md={4} xl={3} className="d-flex justify-content-center mb-5 mt-2">
        <Category />
        </Col>
        <Col xs={6} md={4} xl={3} className="d-flex justify-content-center mb-5 mt-2">
        <Category />
        </Col>
        <Col xs={6} md={4} xl={3} className="d-flex justify-content-center mb-5 mt-2">
        <Category />
        </Col>
        <Col xs={6} md={4} xl={3} className="d-flex justify-content-center mb-5 mt-2">
        <Category />
        </Col>
        <Col xs={6} md={4} xl={3} className="d-flex justify-content-center mb-5 mt-2">
        <Category />
        </Col>
        <Col xs={6} md={4} xl={3} className="d-flex justify-content-center mb-5 mt-2">
        <Category />
        </Col>
        <Col xs={6} md={4} xl={3} className="d-flex justify-content-center mb-5 mt-2">
        <Category />
        </Col>
      </Row>
    </Container>
  )
}

export default Categories
