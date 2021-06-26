import "../App.css"
import { Container, Row, Col, Nav, NavItem, NavLink } from "reactstrap"
import { Switch, Route, Link } from "react-router-dom"
import Media from "react-media"

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

      <Col className=' d-flex' id='navbarContainer'>
        <Nav vertical>
          <NavItem id='navItems'>
            <Link to='./about'>
              <NavLink href='#' style={{ color: "#201e1d" }}>
                <span style={{ color: "#82ffd9" }}>[0]</span> About
              </NavLink>
            </Link>
          </NavItem>
          <NavItem id='navItems'>
            <NavLink href='#' style={{ color: "#201e1d" }}>
              <span style={{ color: "#82ffd9" }}>[1]</span> Skills
            </NavLink>
          </NavItem>
          <NavItem id='navItems'>
            <NavLink href='#' style={{ color: "#201e1d" }}>
              <span style={{ color: "#82ffd9" }}>[2]</span> Projects
            </NavLink>
          </NavItem>
          <NavItem id='navItems'>
            <NavLink href='#' style={{ color: "#201e1d" }}>
              <span style={{ color: "#82ffd9" }}>[3]</span> Contact
            </NavLink>
          </NavItem>
        </Nav>
      </Col>
    </Row>
  )
}

export default PictureHeader