import React, { useContext } from "react"
import ThemeContext from "../utils/theme"
import { Navbar, Nav, Form } from "react-bootstrap"
import { Link } from "gatsby"
import "./Fontawesome.js"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

export default () => {
  const { dark, toggleDark, toString } = useContext(ThemeContext)
  return (
    <Navbar variant={toString()} fixed="top" collapseOnSelect expand="md">
      <Navbar.Brand className="pl-1 ml-1" as={Link} to="/">
        <img 
					src={dark ? "../../icons/logo-white.png" : "../../icons/logo-black.png"}
					title="Home" 
					style={{width : '20px', margin:'5px'}}>
				</img>
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse
        id="responsive-navbar-nav"
        className="justify-content-end"
      >
        <Nav className="pr-1 mr-1 nav-links">
				<Nav.Link className="ml-2" as={Link} to="/about" title="about">
					about
				</Nav.Link>
				<Nav.Link className="ml-2" as={Link} to="/resume" title="resume">
					resume
				</Nav.Link>
				<Nav.Link className="ml-2" as={Link} to="/experience" title="experience">
					experience
				</Nav.Link>
				<Nav.Link className="ml-2" as={Link} to="/projects" title="projects">
					projects
				</Nav.Link>
				<Nav.Link className="ml-2" as={Link} to="/activities" title="activities">
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
