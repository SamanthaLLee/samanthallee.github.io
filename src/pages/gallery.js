import { graphql } from 'gatsby'
import React from 'react'

import Layout from '../components/layout'
import { SEO } from "../utils"
import Gallery from '@browniebroke/gatsby-image-gallery'
import '@browniebroke/gatsby-image-gallery/dist/style.css'

const IndexPage = ({ data }) => {
  const images = data.images.edges.map(({ node }) => node.childImageSharp)
  // Override some of Lightbox options to localise labels in French
  const lightboxOptions = {
    imageLoadErrorMessage: 'Impossible de charger cette image',
    nextLabel: 'Image suivante',
    prevLabel: 'Image précédente',
    zoomInLabel: 'Zoomer',
    zoomOutLabel: 'Dézoomer',
    closeLabel: 'Fermer',
  }
  return (
    <Layout>
      <SEO title="Example" />
      <h1>Gatsby image gallery demo</h1>
      <p>A very simple page to demo the gallery component.</p>
      <Gallery images={images} lightboxOptions={lightboxOptions} />
    </Layout>
  )
}

export const query = graphql`
  query ImagesForGallery {
    images: allFile(
      filter: { 
				relativePath: { regex: "/img/" }
				relativeDirectory: { regex: "/content/gallery/" }
		 }
      sort: { fields: name, order: DESC }
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