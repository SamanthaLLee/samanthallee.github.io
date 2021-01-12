import React from "react"
import { useStaticQuery, graphql } from "gatsby"

export default () => {
  const { author } = useStaticQuery(query).site.siteMetadata
  return (
    <div className="px-3 footer text-center">
      <span className="m-auto footer">
        <b>sam lin lee</b> &copy; {new Date().getFullYear()} | made with
        <span className="heart">&nbsp;❤&nbsp;</span>
				and <a href="https://www.gatsbyjs.com/">gatsby</a>
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
