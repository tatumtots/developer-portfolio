import "../App.css"
import { Container, Row, Col } from "reactstrap"

function PictureHeader() {
  return (
    <Row className='row' id='pictureHolder'>
      <Col className='border ' xs='4' id='tatumBray'>
        Tatum Bray
        <Row
          className='border d-flex'
          style={{
            fontSize: "2rem",
            fontFamily: '"Advent Pro", sans-serif',
            color: "201e1d",
          }}
        >
          Web Developer
        </Row>
      </Col>
      <Col className='border d-flex' id='navbarContainer'>
        NavBar
      </Col>
    </Row>
  )
}

export default PictureHeader
