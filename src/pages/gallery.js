import React from 'react'
import { graphql } from 'gatsby'
import PropTypes from 'prop-types'
import MyLightbox from '../components/Lightbox'
import { Utils } from "../utils"



const IndexPage = ({ data }) => {
  const regex = /\/[gallery].*\/|$/
  const allFeaturedImages = data.images.edges || []
  const allPosts = data.info.edges || []
  const featuredImageMap = Utils.getImageMap(allFeaturedImages, regex)

  return (

    <MyLightbox
      className="lightbox-z-index"
      images={data.images.edges}
      alt={data.info.edges}

      featuredImageMap={featuredImageMap}
      allPosts={allPosts}
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