import React, { useState } from "react"
import { graphql } from "gatsby"
import { PageLayout, PageTitle, ProjectLink } from "../components"
import { SEO, Utils } from "../utils"
import { Container, Form, FormControl } from "react-bootstrap"

export default ({ data }) => {
  const [state, setState] = useState({
    filteredData: [],
    query: "",
  })

  const allFeaturedImages = data.allFile.edges || []
  const allPosts = data.allMarkdownRemark.edges || []
  const regex = /\/[projects].*\/|$/
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
      <SEO title="Projects" />
      <PageTitle title="Projects" />
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
            <ProjectLink
              to={node.fields.slug}
              featuredImage={featuredImageMap[node.fields.slug]}
              title={node.frontmatter.title}
              startDate={node.frontmatter.start}
              endDate={node.frontmatter.end}
              season={node.frontmatter.season}
              year={node.frontmatter.year}
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
      filter: { fileAbsolutePath: { regex: "/projects/" } }
      sort: { fields: [frontmatter___end], order: DESC }
    ) {
      totalCount
      edges {
        node {
          id
          frontmatter {
            title
            description
            tags
            start(formatString: "MMMM YYYY")
						end(formatString: "MMMM YYYY")
						season
						year
						index
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
        relativeDirectory: { regex: "/content/projects/" }
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
