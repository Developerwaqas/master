import React from "react";
import { Navbar, Container, Nav } from 'react-bootstrap'
import '../assets/css/nav.css'
function nav() {
  return (
    <div  >
      <Navbar className=" bgnav" variant="dark" expand="lg" fixed="top">
        <Container>
          <Navbar.Brand href="#home" id="brandname">BitSoftSolution</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="justify-content-end" id="nav">
              <Nav.Item>
                <Nav.Link href="" id="link">Home</Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link id="link">Developer</Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link id="link"></Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link id="link">Backend</Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link id="link">FrontEnd</Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link id="link">Seo</Nav.Link>
              </Nav.Item>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  )
}
export default nav();