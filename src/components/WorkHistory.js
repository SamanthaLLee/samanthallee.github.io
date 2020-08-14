import React from "react"
import Img from "gatsby-image"
import { Container, Row, Col, Badge } from "react-bootstrap"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

export default ({ html, frontmatter, image, link }) => {
  return (
    <Container className="px-5 project-link text-left">
					<a href={link} target="_blank" download>
						<FontAwesomeIcon
							style={{ fontSize: "2rem", color:"#666" }}
							icon={["fas", "file-download"]}
							className="icons file"
						/>
					</a>
					<a href={link} target="_blank">
						<FontAwesomeIcon
							style={{ fontSize: "2rem", color:"#666" }}
							icon={["fa", "link"]}
							className="icons file"
						/>
	        </a>
					<p></p>
					<Img
					fluid={image}
					className="m-auto resume"
		      />
    </Container>
  )
}
