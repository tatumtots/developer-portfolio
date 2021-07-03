import "./App.css"
import { Container, Row, Col } from "reactstrap"
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom"

import PictureHeader from "./Components/PictureHeader"
import AboutSection from "./Components/AboutSection"
import SkillsSection from "./Components/SkillsSection"
import ProjectsSection from "./Components/ProjectsSection"
import Contact from "./Components/ContactSection"
import Navbar from "./Components/Navbar"
import Footer from "./Components/Footer"

function App() {
  return (
    <Container fluid>
      <PictureHeader />
      <AboutSection />
      <SkillsSection />
      <ProjectsSection />
      <Contact />
      <Footer />
    </Container>
  )
}

export default App
