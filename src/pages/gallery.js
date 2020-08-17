import React from 'react'
import { graphql } from 'gatsby'
import PropTypes from 'prop-types'
import Header from '../components/Header'
import Layout from '../components/layout'
import MyLightbox from '../components/Lightbox'
import { PageLayout, PageTitle } from "../components"
import { SEO, Utils } from "../utils"

const IndexPage = ({ data }) => {
	const allCaptions = data.info.edges || []
	const regex = /\/[gallery].*\/|$/
	const captionMap = Utils.getCaptionMap(allCaptions, regex)

	const captions = data.info.edges.map(({ node }) => node.frontmatter.caption)
	
	return (
		
			<MyLightbox className="lightbox-z-index" images={data.allImageSharp.edges} alt={data.info.edges}/>
		
  )
 
}

IndexPage.propTypes = {
  data: PropTypes.object.isRequired,
}

export default IndexPage

export const pageQuery = graphql`
  query indexQueryAndIndexQuery {
    site {
      siteMetadata {
        title
      }
    }
    allImageSharp(
			filter: {original: {src: { regex:"/img/" }}}) {
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