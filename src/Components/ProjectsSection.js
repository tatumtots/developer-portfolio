import { Container, Row, Col } from "reactstrap"

import artismaImg from "../Images/artisma1.JPG"

function ProjectsSection() {
  return (
    <Row className='row' id='projectsSect'>
      Projects
      <Row>
        <Col>
          <img src={artismaImg} alt='alt' width='1000' />
        </Col>
      </Row>
    </Row>
  )
}

export default ProjectsSection
