import "./App.css"
import { Container, Row, Col } from "reactstrap"
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom"

import PictureHeader from "./Components/PictureHeader"
import AboutSection from "./Components/AboutSection"
import SkillsSection from "./Components/SkillsSection"
import ProjectsSection from "./Components/ProjectsSection"

function App() {
  return (
    <Router>
      <Container fluid>
        <PictureHeader />
        <Switch>
          <Route path='/about' component={AboutSection}></Route>
        </Switch>

        <SkillsSection />
        <ProjectsSection />
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
    </Router>
  )
}

export default App
