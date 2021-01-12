import React from "react"
import Layout from "./layout"
import { Link, Button, ModalRoutingContext } from 'gatsby-plugin-modal-routing'
import { Container } from "react-bootstrap"
import { PageLayout, PageTitle } from "../components"


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
				<PageLayout>
				<Container fluid className="text-left">
		      {children}
		    </Container>
				</PageLayout>
      )
    )}
  </ModalRoutingContext.Consumer>
)

export default ConditionalLayout
