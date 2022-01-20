import React from "react"
import { Jumbotron } from "react-bootstrap"

export default ({ title, children }) => (
  <Jumbotron className="bg-none pt-5 mt-5 mb-4 pb-0">
    <h1>
      {title}{children}
    </h1>
  </Jumbotron>
)
