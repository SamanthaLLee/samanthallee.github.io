import React from "react"
import { graphql } from "gatsby"
import PostTemplate from "./post-template"
import Badge from "react-bootstrap/Badge"

const SubTitle = ({ start, end, tags, website }) => (
  <h5 className="text-muted mb-5">
    {start} – {end}
		<div className="mb-2"><p></p>
	    {tags.map(tag => (
	      <Badge key={tag} pill variant="dark" className="img-hover px-3 mb-1 mr-1">
	        <h5 className="text-white my-0">{tag}</h5>
	      </Badge>
	    ))}
	  </div>
		<div className="mb-5">	    
			<a href={website} className="no-decorations"><Badge key={website} pill className="img-hover px-3 mb-1 mr-1 themed-pill" >
				<h5 className="themed-text-swapped my-0">website</h5></Badge> </a>
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
          start={post.frontmatter.start}
					end={post.frontmatter.end}
					tags={post.frontmatter.tags}
					website={post.frontmatter.website}
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
        start(formatString: "MMMM YYYY")
				end(formatString: "MMMM YYYY")
				tags
				website
      }
      excerpt
      timeToRead
    }
  }
`
