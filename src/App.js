import "./App.css"
import { Container, Row, Col } from "reactstrap"

import PictureHeader from "./Components/PictureHeader"
import SkillsSection from "./Components/SkillsSection"

function App() {
  return (
    <Container fluid>
      <PictureHeader />
      <Row className='row' id='aboutSect'>
        <span className='headers' style={{ color: "#82ffd9" }}>
          About
        </span>
        <Row className='col-6' id='bio'>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Tempore,
          labore corrupti velit nam dolor reiciendis eaque voluptates molestiae
          atque voluptas molestias, nihil sunt. Sed porro amet, fugit pariatur
          voluptate esse?
        </Row>
      </Row>
      <SkillsSection />
      <Row className='row' id='projectsSect'>
        YOYOY
      </Row>
      <Row className='row' id='contactSect'>
        YOYOY
      </Row>
      <Row className='row' id='footerSect'>
        <div>
          Icons made by{" "}
          <a href='https://www.freepik.com' title='Freepik'>
            Freepik
          </a>{" "}
          from{" "}
          <a href='https://www.flaticon.com/' title='Flaticon'>
            www.flaticon.com
          </a>
        </div>
      </Row>
    </Container>
  )
}

export default App
