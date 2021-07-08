import styled from "styled-components"
import { Link as LinkR } from "react-router-dom"
import { Link as LinkS } from "react-scroll"

export const Nav = styled.nav`
  display: flex;
  justify-content: flex-end;
  align-items: flex-start;
  font-size: 1 rem;
  position: sticky;
  top: 0;

  @media screen and (max-width: 960px) {
    transition: 0.8s all ease;
  }
`
export const NavbarContainer = styled.div`

justify-content: flex-end;
height: 0px;
position: sticky;
  top: 0;

width: 100%;
padding 0 200px;
max-width: 500px;
`

export const NavLogo = styled(LinkR)`
  color: #fff;
  justify-self: flex-start;
  cursor: pointer;
  font-size: 5rem;
  display: flex;
  align-items: center;
  margin-left: 50px;
  font-weight: bold;
  text-decoration: none;
`
export const MobileView = styled.div`
  display: none;

  @media screen and (max-width: 768px) {
    display: block;
    position: absolute;
    top: 0;
    right: 0;
    transform: translate(-100%, 60%);
    font-size: 1.8rem;
    cursor: pointer;
  }
`
export const NavMenu = styled.ul`
  align-items: center;
  list-style: none;

  @media screen and (max-width: 768px) {
    display: none;
  }
`

export const NavItem = styled.li`
  height: 80px;
`
export const NavLinks = styled(LinkS)`

display: flex;
justify-content: flex-end;
text-decoration: none;
padding: 0 0.5rem;
height: 100%
cursor: pointer;
  font-family: "Advent Pro", sans-serif;
  font-size: 2em;
  color: #201e1d;

&.active {
    border-bottom: 3px solid #01bf71;
}
`
export const NavBtn = styled.nav`
  display: flex;
  align-items: center;

  @media screen and (max-width: 768px) {
    display: none;
  }
`

export const NavBtnLink = styled(LinkR)`
border-radius: 50px;
background: rgba(0, 0, 0, 0.3);
white-space: nowrap;
padding 10px 22px;
color:  #82ffd9;
font-size: 16px;
outline: none;
border-style: solid;

cursor: pointer;
transition: all 0.2s ease-in-out;
text-decoration: none;

&:hover {
  transition: all 0.2 ease-in-out;
  background: #fff;
  color: #010606;
}
`
