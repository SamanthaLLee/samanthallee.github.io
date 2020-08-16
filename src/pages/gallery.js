import { graphql } from 'gatsby'
import React from 'react'

import Layout from '../components/layout'
import { SEO, Utils } from "../utils"
import Gallery from '@browniebroke/gatsby-image-gallery'
import '@browniebroke/gatsby-image-gallery/dist/style.css'

const IndexPage = ({ data }) => {
  const images = data.images.edges.map(({ node }) => node.childImageSharp)	
	
	const allCaptions = data.info.edges || []
	const regex = /\/[gallery].*\/|$/
  const captionMap = Utils.getCaptionMap(allCaptions, regex)

	const captions = data.info.edges.map(({ node }) => node.frontmatter.caption)
	
	var i = 1;

	const lightboxOptions = {
		imageLoadErrorMessage: 'Impossible de charger cette image',
		nextLabel: 'Image suivante',
		prevLabel: 'Image précédente',
		zoomInLabel: 'Zoomer',
		zoomOutLabel: 'Dézoomer',
		closeLabel: 'Fermer',
		imageCaption: captions[i]
	}
  return (
    <Layout>
      <SEO title="Example" />
      <h1>Gatsby image gallery demo</h1>
      <p>A very simple page to demo the gallery component.</p>
      <Gallery images={images} lightboxOptions={lightboxOptions}/>
    </Layout>
  )
}


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
            thumb: fluid(maxWidth: 270, maxHeight: 270) {
              ...GatsbyImageSharpFluid
            }
            full: fluid(maxWidth: 1024) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    }
  }
`
export default IndexPage