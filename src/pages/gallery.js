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
	const images = data.images.edges.map(({ node }) => node.childImageSharp)	
	const captions = data.info.edges.map(({ node }) => node.frontmatter.caption)
	
	const allFeaturedImages = data.images.edges || []
  const allPosts = data.info.edges || []
  //const regex = /\/[gallery].*\/|$/
  const featuredImageMap = Utils.getImageMap(allFeaturedImages, regex)

	return (
		
			<MyLightbox 
				className="lightbox-z-index" 
				images={data.images.edges} 
				alt={data.info.edges}
				
				featuredImageMap = {featuredImageMap}
				allPosts = {allPosts}
			/>
		
  )
 
}

IndexPage.propTypes = {
  data: PropTypes.object.isRequired,
}

export default IndexPage

export const query = graphql`
  query {
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
    images: allFile(
      filter: { 
				relativePath: { regex: "/img/" }
				relativeDirectory: { regex: "/content/gallery/" }
		 }
    ) {
			edges {
        node {
          childImageSharp {
            fluid(maxWidth: 1800, quality: 100) {
              ...GatsbyImageSharpFluid
            }
          }
          relativePath
        }
      }
    }
  }
`