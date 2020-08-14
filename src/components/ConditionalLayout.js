import React from "react"
import Layout from "./layout"
import { Link, Button, ModalRoutingContext } from 'gatsby-plugin-modal-routing'
import { Container } from "react-bootstrap"

const ConditionalLayout = ({ children, ...rest }) => (
  <ModalRoutingContext.Consumer>
    {({ modal, closeTo }) => (
      modal ? (
        <React.Fragment>
          {children}					
						<Link className="close-button-text" to={closeTo}>
							Get me out of here!
	          </Link>
        </React.Fragment>
      ) : (
        <Layout { ...rest }>
          {children}
        </Layout>
      )
    )}
  </ModalRoutingContext.Consumer>
)

export default ConditionalLayout
