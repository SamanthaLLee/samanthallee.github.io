import React from "react"
import { graphql } from "gatsby"
import PostTemplate from "./post-template"
import Badge from "react-bootstrap/Badge"

const SubTitle = ({ season, year, tags }) => (
	<h5 className="text-muted mb-5">
    {season} {year}
		<div className="mb-5"><p></p>
	    {tags.map(tag => (
	      <Badge key={tag} pill variant="dark" className="img-hover px-3 mb-1 mr-1">
	        <h5 className="text-white my-0">{tag}</h5>
	      </Badge>
	    ))}
	  </div>
  </h5>
)

export default ({ data }) => {
  const post = data.markdownRemark
  return (
    <PostTemplate
      title={post.frontmatter.title}
      subTitle={
        <SubTitle
					season={post.frontmatter.season}
					year={post.frontmatter.year}
					tags={post.frontmatter.tags}
        />
      }
      excerpt={post.excerpt}
      html={post.html}
    />
  )
}

export const query = graphql`
  query($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      frontmatter {
				title
	 			season
	 		  year(formatString: "YYYY")
	 			tags
      }
      excerpt
      timeToRead
    }
  }
`