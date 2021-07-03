import "../App.css"
import { Container, Row, Col, Nav, NavItem, NavLink } from "reactstrap"
import { BrowserRouter, Switch, Route, Link } from "react-router-dom"
import Media from "react-media"
import Navbar from "./Navbar"
import AboutSection from "./AboutSection"

function PictureHeader() {
  return (
    <Row className='row' id='pictureHolder'>
      <Col className='col' xs='4'>
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
      <Navbar />
    </Row>
  )
}

export default PictureHeader
