import React, { useState } from "react"
import { graphql } from "gatsby"
import { PageLayout, PageTitle, ActivityLink } from "../components"
import { SEO, Utils } from "../utils"
import { Container, Form, FormControl } from "react-bootstrap"

export default ({ data }) => {
  const [state, setState] = useState({
    filteredData: [],
    query: "",
  })

  const allFeaturedImages = data.allFile.edges || []
  const allPosts = data.allMarkdownRemark.edges || []
  const regex = /\/[activities].*\/|$/
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
      <Container className="px-5 mb-5 text-center">
        <Form className="blog-filter">
          <FormControl
            className="search"
            type="text"
            placeholder="search"
            onChange={handleChange}
          />
        </Form>
      </Container>
      <Container
        fluid
        className="p-3 w-auto text-left d-flex flex-wrap justify-content-center"
      >
        {filteredPosts.map(({ node }) => (
          <div key={node.id} className="p-3">
            <ActivityLink
              to={node.frontmatter.website}
              featuredImage={featuredImageMap[node.fields.slug]}
              title={node.frontmatter.title}
              startDate={node.frontmatter.start}
              endDate={node.frontmatter.end}
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
      filter: { fileAbsolutePath: { regex: "/activities/" } }
      sort: { fields: [frontmatter___end,frontmatter___index], order: DESC }
    ) {
      totalCount
      edges {
        node {
          id
          frontmatter {
            title
            description
            tags
            start
						end
						index
            website
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
        relativePath: { regex: "/feature/" }
        relativeDirectory: { regex: "/content/activities/" }
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