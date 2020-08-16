import React from 'react'
import { graphql } from 'gatsby'
import PropTypes from 'prop-types'
import Layout from '../components/layout'
import Lightbox from '../components/Lightbox'
import { PageLayout, PageTitle } from "../components"
import { SEO, Utils } from "../utils"

const IndexPage = ({ data }) => {
	const allCaptions = data.info.edges || []
	const regex = /\/[gallery].*\/|$/
	const captionMap = Utils.getCaptionMap(allCaptions, regex)

	const captions = data.info.edges.map(({ node }) => node.frontmatter.caption)
	
	return (
		<Layout>
	 <SEO title="Gallery" />
	 <PageTitle title="Gallery" />
			<Lightbox images={data.allImageSharp.edges} alt={data.info.edges}/>
		</Layout>
  )
 
}

IndexPage.propTypes = {
  data: PropTypes.object.isRequired,
}

export default IndexPage

export const pageQuery = graphql`
  query IndexQuery {
    site {
      siteMetadata {
        title
      }
    }
    allImageSharp(filter: {original: {src: { regex:"/img/" }}}) {
      edges {
        node {
          sizes(maxWidth: 1800) {
            ...GatsbyImageSharpSizes
          }
        }
      }
    }
		info: allMarkdownRemark(
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
					fileAbsolutePath
				}
			}
		}
  }
`