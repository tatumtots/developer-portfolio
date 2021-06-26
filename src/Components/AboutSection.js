import { Container, Row, Col } from "reactstrap"

function AboutSection() {
  return (
    <Row className='row border d-flex ' id='aboutSect'>
      <span className='row headers' style={{ color: "#82ffd9" }}>
        About
      </span>
      <Row>
        <Col className='col border' id='bio'>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Tempore,
          labore corrupti velit nam dolor reiciendis eaque voluptates molestiae
          atque voluptas molestias, nihil sunt. Sed porro amet, fugit pariatur
          voluptate esse?
        </Col>
      </Row>
    </Row>
  )
}

export default AboutSection
