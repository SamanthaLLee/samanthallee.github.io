import React from "react"
import { Link } from "gatsby"
import Img from "gatsby-image"
import Card from "react-bootstrap/Card"
import { Col, Row, Container } from "react-bootstrap"
import Badge from "react-bootstrap/Badge"

export default props => {
  return (
		<Container fluid className="pb-4 text-left">
	    <Card className="img-container image" as={Link} to={props.to}>
	      <Card.Img as={Img} className="h-100" fluid={props.featuredImage}/>
	    </Card>	
    </Container>
  )
}
