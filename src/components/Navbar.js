import React, { useContext } from "react"
import ThemeContext from "../utils/theme"
import { Navbar, Nav, Form } from "react-bootstrap"
import { Link } from "gatsby"
import "./Fontawesome.js"

export default () => {
  const { dark, toggleDark, toString } = useContext(ThemeContext)
  return (
    <Navbar variant={toString()} fixed="top" collapseOnSelect expand="md">
      <Navbar.Brand className="pl-1 ml-1 no-effect" as={Link} to="/">
        <img
          alt="Sam's logo: her initials, SLL, stylized in all caps, with the two Ls offset a little lower than the S."
          src={dark ? "../../icons/logo-white.png" : "../../icons/logo-black.png"}
          title="Home"
          style={{ width: '20px', margin: '5px' }}>
        </img>
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse
        id="responsive-navbar-nav"
        className="justify-content-end"
      >
        <Nav className="pr-1 mr-1 nav-links">
          <Nav.Link className="ml-2 no-effect" as={Link} to="/about" title="about">
            about
				</Nav.Link>
          <Nav.Link className="ml-2 no-effect" as={Link} to="/resume" title="resume">
            resume
				</Nav.Link>
          <Nav.Link className="ml-2 no-effect" as={Link} to="/experience" title="experience">
            experience
				</Nav.Link>
          <Nav.Link className="ml-2 no-effect" as={Link} to="/projects" title="projects">
            projects
				</Nav.Link>
          <Nav.Link className="ml-2 no-effect" as={Link} to="/activities" title="activities">
            activities
				</Nav.Link>
          <Form className="ml-3 my-auto">
            <Form.Check
              type="switch"
              id="custom-switch"
              label=""
              title="Toggle Theme"
              checked={dark}
              onChange={toggleDark}
            />
          </Form>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  )
}
