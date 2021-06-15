import React from "react"
import { Link } from "gatsby"
import Img from "gatsby-image"
import Card from "react-bootstrap/Card"
import Badge from "react-bootstrap/Badge"

export default props => {
  return (
    <Card className="card-container activity rounded-corners no-effect" as={Link} to={props.to}>
      <Card.Img className="shadow rounded-top-corners" as={Img} fluid={props.featuredImage} />
      <Card.Body className="pt-3 rounded-bottom-corners">
        <Card.Title>
          <h4>{props.title}</h4>
        </Card.Title>
        <Card.Subtitle className="mb-2 text-muted">
          {props.startDate} - {props.endDate}
        </Card.Subtitle>
        <Card.Text style={{ backgroundColor: "none" }}>
          <h6>{props.description}</h6>
          {props.tags.map(tag => (
            <Badge pill variant="dark" className="px-3 mr-1 pill" key={tag}>
              <p className="text-white my-0 pill">{tag}</p>
            </Badge>
          ))}
        </Card.Text>
      </Card.Body>
    </Card>
  )
}
