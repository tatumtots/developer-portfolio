import React from "react"
import { Container, Row, Col, Nav, NavItem, NavLink } from "reactstrap"
import AboutSection from "./AboutSection"

const Navbar = () => {
  return (
    <Col className=' d-flex' id='navbarContainer'>
      <Nav vertical>
        <NavItem id='navItems'>
          <NavLink href='#' style={{ color: "#201e1d" }}>
            <span style={{ color: "#82ffd9" }}>[0]</span> About
          </NavLink>
        </NavItem>

        <NavItem id='navItems'>
          <NavLink href='#skills' style={{ color: "#201e1d" }}>
            <span style={{ color: "#82ffd9" }}>[1]</span> Skills
          </NavLink>
        </NavItem>

        <NavItem id='navItems'>
          <NavLink href='#projects' style={{ color: "#201e1d" }}>
            <span style={{ color: "#82ffd9" }}>[2]</span> Projects
          </NavLink>
        </NavItem>

        <NavItem id='navItems'>
          <NavLink href='#contact' style={{ color: "#201e1d" }}>
            <span style={{ color: "#82ffd9" }}>[3]</span> Contact
          </NavLink>
        </NavItem>
      </Nav>
    </Col>
  )
}

export default Navbar
