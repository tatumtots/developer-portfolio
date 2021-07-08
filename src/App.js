import "./App.css"
import { Container, Row, Col } from "reactstrap"
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"

import PictureHeader from "./Components/PictureHeader"
import AboutSection from "./Components/AboutSection"
import SkillsSection from "./Components/SkillsSection"
import ProjectsSection from "./Components/ProjectsSection"
import Contact from "./Components/ContactSection"
import Navbar from "./Components/Navbar/Navbar"
import Footer from "./Components/Footer"

function App() {
  return (
    <Router>
      <Switch>
        <Container fluid>
          <Navbar />
          <PictureHeader />
          <AboutSection />
          <SkillsSection />
          <ProjectsSection />
          <Contact />
          <Footer />
        </Container>
      </Switch>
    </Router>
  )
}

export default App
