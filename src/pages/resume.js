import React from "react"
import { PageLayout, PageTitle } from "../components"
import { SEO } from "../utils"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import Container from "react-bootstrap/Container"
import resumev1 from "../../static/docs/Samantha-Lee-Resume.png"

export default () => {
  return (
		<PageLayout>
      <SEO title="Resume" />
      <PageTitle title="Resume">
      </PageTitle>
      <Container style={{paddingRight:100,paddingLeft:100,paddingBottom:70}} fluid>
				<a href="docs/Samantha-Lee-Resume.pdf" target="_blank" download>
					<FontAwesomeIcon
						style={{ fontSize: "2rem", color:"#666" }}
						icon={["fas", "file-download"]}
						className="icons file"
					/>
				</a>
				<a href="docs/Samantha-Lee-Resume.pdf" target="_blank">
					<FontAwesomeIcon
						style={{ fontSize: "2rem", color:"#666" }}
						icon={["fa", "link"]}
						className="icons file"
					/>
				</a>
				<p></p>
				<a href="docs/Samantha-Lee-Resume.pdf" target="_blank"><img
				alt="Sam's professional resume with the following sections: education, experience, skills, projects, and leadership & activities"
				src={resumev1}
				className="m-auto resume"
				/></a>
      </Container>
    </PageLayout>
  )
}

// 
// export default ({ data }) => {
//   const history = data.allMarkdownRemark.edges || []
//   const images = data.allFile.edges || []
//   const imageMap = Utils.getImageMap(images, /\/[resume].*\/|$/)
//   return (
//     <PageLayout>
//       <SEO title="Resume" />
//       <PageTitle title="Resume">
//       </PageTitle>
//       <Container style={{paddingRight:100,paddingLeft:100,paddingBottom:70}} fluid>
// 				<Row><Col>
// 				<Image></Image>
// 				<Img
// 				fluid={image}
// 				className="m-auto resume"
// 				/>
// 
// 	        {history.map(({ node }) => (
// 	          <Col lg={6} style={{paddingBottom:70}}>
// 							<div key={node.id}>
// 							<WorkHistory
// 								frontmatter={node.frontmatter}
// 								image={imageMap[node.fields.slug]}
// 								html={node.html}
// 								link={node.frontmatter.link}
// 							/>
// 		          </div>
// 						</Col>
// 	        ))}
// 				</Col>
// 				</Row>
//       </Container>
//     </PageLayout>
//   )
// }
// 
// export const query = graphql`
//   query {
//     allMarkdownRemark(
//       filter: { fileAbsolutePath: { regex: "/resume/" } }
//       sort: { fields: [frontmatter___startDate], order: DESC }
//     ) {
//       edges {
//         node {
//           id
//           html
//           frontmatter {
//             company
//             location
//             position
//             tags
//             startDate(formatString: "MMMM")
//             endDate(formatString: "MMMM, YYYY")
// 						link
//           }
//           fields {
//             slug
//           }
//         }
//       }
//     }
//     allFile(
//       filter: {
//         extension: { eq: "png" }
//         relativePath: { regex: "/resume/" }
//         relativeDirectory: { regex: "/content/resume/" }
//       }
//     ) {
//       edges {
//         node {
//           childImageSharp {
//             fluid(maxWidth: 400) {
//               ...GatsbyImageSharpFluid
//             }
//           }
//           relativePath
//         }
//       }
//     }
//   }
// `