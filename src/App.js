import "./App.css"
import { Container, Row, Col } from "reactstrap"
import logo from "./logo512.png"

import PictureHeader from "./Components/PictureHeader"

function App() {
  console.log(logo)
  return (
    <Container fluid={true}>
      <PictureHeader />
      <Row className='row' id='aboutSect'>
        <Row id='headers'>About</Row>
        <Row className='col-6' id='bio'>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Tempore,
          labore corrupti velit nam dolor reiciendis eaque voluptates molestiae
          atque voluptas molestias, nihil sunt. Sed porro amet, fugit pariatur
          voluptate esse?
        </Row>
      </Row>
      <Row className='row' id='skillsSect'>
        <img src={logo} alt='hi' height='200' width='200' />
      </Row>
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
