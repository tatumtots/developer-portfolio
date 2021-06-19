import { Container, Row, Col } from "reactstrap"

import react from "../Images/atom.png"
import reactNative from "../Images/physics.png"
import html from "../Images/html.png"
import javaScript from "../Images/javascript.png"
import css from "../Images/css-3.png"

function SkillsSection() {
  return (
    <Row className=' row' id='skillsSect'>
      <span className='headers'>Skills</span>

      <Row className='iconRow d-flex'>
        <Col className='col'>
          <img src={react} alt='react logo' className='logo' />
          <div>React </div>
        </Col>
        <Col className='col'>
          <img src={reactNative} alt='react logo' className='logo' />
          <div>React Native</div>
        </Col>
        <Col className='col'>
          <img src={html} alt='react logo' className='logo' />
          <div>HTML</div>
        </Col>
        <Col className='col'>
          <img src={css} alt='react logo' className='logo' />
          <div>CSS</div>
        </Col>
        <Col className='col'>
          <img src={javaScript} alt='react logo' className='logo' />
          <div>JavaScript</div>
        </Col>
      </Row>
    </Row>
  )
}

export default SkillsSection
