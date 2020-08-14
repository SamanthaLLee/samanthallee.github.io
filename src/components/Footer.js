import React from "react"
import { useStaticQuery, graphql } from "gatsby"

export default () => {
  const { author } = useStaticQuery(query).site.siteMetadata
  return (
    <div className="px-3 py-2 footer text-center">
      <span className="m-auto">
        <b>sam lin lee</b> &copy; {new Date().getFullYear()} | made with&nbsp;
        <span className="heart">&nbsp;❤&nbsp;</span>
      </span>
    </div>
  )
}
const query = graphql`
  query Author {
    site {
      siteMetadata {
        author
      }
    }
  }
`
