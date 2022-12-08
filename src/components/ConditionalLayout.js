import React from "react"
import { Link, ModalRoutingContext } from "gatsby-plugin-modal-routing"
import { Container } from "react-bootstrap"
import { PageLayout } from "../components"

const ConditionalLayout = ({ children, ...rest }) => (
  <ModalRoutingContext.Consumer>
    {({ modal, closeTo }) =>
      modal ? (
        <React.Fragment>
          {children}
          <Link className="close-button-text" to={closeTo}>
            ❌ Get me out of here!
          </Link>
          <div style={{ paddingTop: "30px", textAlign: "left" }}>
            <a
              href="https://samanthallee.notion.site/samanthallee/sam-s-misc-collection-22c816bd4369410184396ed470d3d35e"
              style={{ color: "white" }}
            >
              (also, here is my super secret notion page)
            </a>
          </div>
        </React.Fragment>
      ) : (
        <PageLayout>
          <Container fluid className="text-left">
            {children}
          </Container>
        </PageLayout>
      )
    }
  </ModalRoutingContext.Consumer>
)

export default ConditionalLayout
