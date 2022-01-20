import React from "react"
import { Container } from "react-bootstrap"
import Header from "./Header"
import Footer from "./Footer"

export default ({ children }) => (

  <Container fluid className="theme-light">
    <Header />
    <Container fluid className="pt-5 mt-5 min-vh-100 text-center">
      {children}
    </Container>
    <Footer />
  </Container>
)
