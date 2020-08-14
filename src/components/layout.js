import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"

import { Container } from "react-bootstrap"
import Header from "./Header"
import Footer from "./Footer"
import "../styles/modal.css"

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <>
		<Container fluid className="px-0 theme-light app-container">
	    <Header />
	    <Container fluid className="pt-5 mt-5 min-vh-100 text-center">
	      {children}
	    </Container>
	    <Footer />
	  </Container>    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
