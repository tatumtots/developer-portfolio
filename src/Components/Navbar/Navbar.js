import React from "react"
import { FaBars } from "react-icons/fa"
import {
  Nav,
  NavbarContainer,
  NavLogo,
  MobileView,
  NavMenu,
  NavItem,
  NavLinks,
  NavBtn,
  NavBtnLink,
} from "./navbarComponents"

const Navbar = () => {
  return (
    <>
      <Nav>
        <NavbarContainer>
          <MobileView>
            <FaBars />
          </MobileView>
          <NavMenu>
            <NavItem>
              <NavLinks
                to='aboutSect'
                spy={true}
                smooth={true}
                duration={50}
                className='some-class'
                activeClass='some-active-class'
              >
                About[0]
              </NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks
                to='skillsSect'
                spy={true}
                smooth={true}
                duration={50}
                className='some-class'
                activeClass='some-active-class'
              >
                Skills[1]
              </NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks
                to='projectsSect'
                spy={true}
                smooth={true}
                duration={50}
                className='some-class'
                activeClass='some-active-class'
              >
                Projects[2]
              </NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks
                to='contactSect'
                spy={true}
                smooth={true}
                duration={50}
                className='some-class'
                activeClass='some-active-class'
              >
                Contact[3]
              </NavLinks>
            </NavItem>
          </NavMenu>
          <NavBtn>
            <NavBtnLink to='/resume'>Resume</NavBtnLink>
          </NavBtn>
        </NavbarContainer>
      </Nav>
    </>
  )
}

export default Navbar
