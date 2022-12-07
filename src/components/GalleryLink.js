import React from "react"
import { Link } from "gatsby"
import Img from "gatsby-image"
import Card from "react-bootstrap/Card"
import { Container } from "react-bootstrap"

export default props => {
  return (
    <Container fluid className="pb-4 text-left">
      <Card className="img-hover image no-effect" as={Link} to={props.to}>
        <Card.Img as={Img} className="h-100" fluid={props.featuredImage} />
      </Card>
    </Container>
  )
}
