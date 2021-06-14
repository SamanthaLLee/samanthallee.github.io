import React from "react"
import { Link, ModalRoutingContext } from 'gatsby-plugin-modal-routing'
import { Container } from "react-bootstrap"
import { PageLayout } from "../components"


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
