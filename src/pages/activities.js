import React, { useState } from "react"
import { graphql } from "gatsby"
import { PageLayout, PageTitle, ActivityLink } from "../components"
import { SEO, Utils } from "../utils"
import { Container, Form, FormControl, Badge } from "react-bootstrap"

export default ({ data }) => {
  const [state, setState] = useState({
    filteredData: [],
    query: "",
  })

  const allFeaturedImages = data.allFile.edges || []
  const allPosts = data.allMarkdownRemark.edges || []
  const regex = /\/[activities].*\/|$/
  const featuredImageMap = Utils.getImageMap(allFeaturedImages, regex)

  function handleChange(param) {
    return e => {
      let query = ""
      if (!param) {
        query = e.target.value
      } else {
        query = param
      }
      const filteredData =
        param === "x"
          ? allPosts
          : allPosts.filter(post => {
              const { description, title, tags } = post.node.frontmatter
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
      <Container>
        <p style={{ display: "inline" }}>quick search: &nbsp;</p>
        <Badge
          pill
          variant="dark"
          className="img-hover px-3 mb-1 mr-1"
          onClick={handleChange("dei")}
        >
          <h6 className="text-white my-0 prevent-select">dei</h6>
        </Badge>
        <Badge
          pill
          variant="dark"
          className="img-hover px-3 mb-1 mr-1"
          onClick={handleChange("politics")}
        >
          <h6 className="text-white my-0 prevent-select">politics</h6>
        </Badge>
        <Badge
          pill
          variant="dark"
          className="img-hover px-3 mb-1 mr-1"
          onClick={handleChange("tech")}
        >
          <h6 className="text-white my-0 prevent-select">tech</h6>
        </Badge>
        <Badge
          pill
          variant="dark"
          className="img-hover px-3 mb-1 mr-1"
          onClick={handleChange("rutgers")}
        >
          <h6 className="text-white my-0 prevent-select">rutgers</h6>
        </Badge>
        <Badge
          pill
          className="img-hover px-2 mb-1 mr-1"
          onClick={handleChange("x")}
        >
          <h6 className="text-white my-0 prevent-select">❌</h6>
        </Badge>
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
      sort: { fields: [frontmatter___end, frontmatter___index], order: DESC }
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
