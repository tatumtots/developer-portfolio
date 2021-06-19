import "../App.css"
import { Container, Row, Col, Navbar, NavItem } from "reactstrap"
import Media from "react-media"

function PictureHeader() {
  return (
    <Row className='row' id='pictureHolder'>
      <Col className='border ' xs='4'>
        <Row id='tatumBray'>
          <Media query={{ maxWidth: 768 }}>
            {(matches) =>
              matches ? (
                <p style={{ fontSize: "3rem " }}>Tatum Bray</p>
              ) : (
                <p>Tatum Bray</p>
              )
            }
          </Media>
        </Row>
        <Row className='d-flex' id='webDeveloper'>
          <Media query={{ maxWidth: 768 }}>
            {(matches) =>
              matches ? (
                <p style={{ fontSize: "1.5rem " }}>Web Developer</p>
              ) : (
                <p>Web Developer</p>
              )
            }
          </Media>
        </Row>
      </Col>
      <Col className='border d-flex' id='navbarContainer'>
        NavBar
      </Col>
    </Row>
  )
}

export default PictureHeader
