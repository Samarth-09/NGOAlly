import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import logo from '../assets/Logo.png'
export default function VolNav() {
  return (
    <div>
      <Navbar expand="lg" data-bs-theme="dark" className="main-nav">
        <Container>
          <Navbar.Brand href="/">
            <img //aspect-ratio = 607:206
              src={logo}
              width="242.8vw"
              height="82.4vh"
              className="d-inline-block align-top"
              alt="React Bootstrap logo"
            />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link className="main-nav mx-1 my-2" href="/feed">
                Campaign Feed
              </Nav.Link>
              <Nav.Link className="main-nav mx-1 my-2" href="/volunteer-dashboard">
                Dashboard
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <hr style={{ color: "white" }} />
    </div>
  );
}