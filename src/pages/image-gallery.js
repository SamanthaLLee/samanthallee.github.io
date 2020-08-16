import React, { useState } from "react"
import { graphql } from "gatsby"
import { PageLayout, PageTitle, GalleryLink } from "../components"
import { SEO, Utils } from "../utils"
import { Container, Form, FormControl } from "react-bootstrap"
import Lightbox from '../components/Lightbox'


export default ({ data }) => {
	
  const [state, setState] = useState({
    filteredData: [],
    query: "",
  })

  const allFeaturedImages = data.allFile.edges || []
  const allPosts = data.allMarkdownRemark.edges || []
  const regex = /\/[gallery].*\/|$/
  const featuredImageMap = Utils.getImageMap(allFeaturedImages, regex)

  const handleChange = e => {
    const query = e.target.value

    const filteredData = allPosts.filter(post => {
      // query will run on the following fields
      const { description, title, tags } = post.node.frontmatter
      // standardize query
      const stdQuery = query.toLowerCase()
      return (
        post.node.excerpt.toLowerCase().includes(stdQuery) ||
        (description && description.toLowerCase().includes(stdQuery)) ||
        title.toLowerCase().includes(stdQuery) ||
        (tags && tags.join("").toLowerCase().includes(stdQuery))
      )
    })

    setState({
      query,
      filteredData,
    })
  }

  const { filteredData, query } = state
  const filteredPosts = query !== "" ? filteredData : allPosts

  return (
    <PageLayout>
      <SEO title="Activities" />
      <PageTitle title="Activities" />
      
      <Container
        fluid
        className="text-left d-flex flex-wrap"
      >
        {filteredPosts.map(({ node }) => (
          <div key={node.id}>
            <GalleryLink
              to={node.fields.slug}
              featuredImage={featuredImageMap[node.fields.slug]}
              title={node.frontmatter.title}
              date={node.frontmatter.date}
							tags={node.frontmatter.tags}
              excerpt={node.excerpt}
							description={node.frontmatter.description}
            />
          </div>
        ))}
      </Container>
    </PageLayout>
  )
}

export const query = graphql`
  query {
    allMarkdownRemark(
      filter: { fileAbsolutePath: { regex: "/gallery/" } }
      sort: { fields: [frontmatter___date], order: DESC }
    ) {
      totalCount
      edges {
        node {
          id
          frontmatter {
						title
            description
            tags
            date(formatString: "MMMM YYYY")
						index
						caption
          }
          fields {
            slug
          }
          excerpt
        }
      }
    }
    allFile(
      filter: {
        relativePath: { regex: "/img/" }
        relativeDirectory: { regex: "/content/gallery/" }
      }
    ) {
      edges {
        node {
          childImageSharp {
            fluid(maxWidth: 400, quality: 100) {
              ...GatsbyImageSharpFluid
            }
          }
          relativePath
        }
      }
    }
  }
`