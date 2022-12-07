import React from "react"
import { PageLayout, PageTitle } from "../components"
import { SEO } from "../utils"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import Container from "react-bootstrap/Container"
import resumev1 from "../../static/docs/Samantha-Lee-Resume.pdf"
import resumev2 from "../../static/docs/Samantha-Lee-Resume.pdf"
import { Row, Col } from "react-bootstrap"

export default () => {
  return (
    <PageLayout>
      <SEO title="Resume/CV" />
      <PageTitle title="Resume/CV"></PageTitle>
      <Container
        style={{ paddingRight: 100, paddingLeft: 100, paddingBottom: 70 }}
        fluid
      >
        <Row>
          <Col lg={6} style={{ paddingBottom: 30 }}>
            <a
              className="no-effect"
              href="docs/Samantha-Lee-Resume.pdf"
              target="_blank"
              download
            >
              <FontAwesomeIcon
                style={{ fontSize: "2rem", color: "#666" }}
                icon={["fas", "file-download"]}
                className="icons file"
              />
            </a>
            <a
              className="no-effect"
              href="docs/Samantha-Lee-Resume.pdf"
              target="_blank"
            >
              <FontAwesomeIcon
                style={{ fontSize: "2rem", color: "#666" }}
                icon={["fa", "link"]}
                className="icons file"
              />
            </a>
            <p></p>
            <a
              className="no-effect"
              href="docs/Samantha-Lee-Resume.pdf"
              target="_blank"
            >
              <img src={resumev1} className="m-auto resume" />
            </a>
          </Col>
          <Col lg={6} style={{ paddingBottom: 30 }}>
            <a
              className="no-effect"
              href="docs/Samantha-Lee-Resume.pdf"
              target="_blank"
              download
            >
              <FontAwesomeIcon
                style={{ fontSize: "2rem", color: "#666" }}
                icon={["fas", "file-download"]}
                className="icons file"
              />
            </a>
            <a
              className="no-effect"
              href="docs/Samantha-Lee-Resume.pdf"
              target="_blank"
            >
              <FontAwesomeIcon
                style={{ fontSize: "2rem", color: "#666" }}
                icon={["fa", "link"]}
                className="icons file"
              />
            </a>
            <p></p>
            <a
              className="no-effect"
              href="docs/Samantha-Lee-Resume.pdf"
              target="_blank"
            >
              <img src={resumev2} className="m-auto resume" />
            </a>
          </Col>
        </Row>
      </Container>
    </PageLayout>
  )
}
