import React, { useContext } from "react"
import { Link } from "gatsby-plugin-modal-routing"
import { Container, Image } from "react-bootstrap"
import Layout from "../components/layout"
import { PageLayout, PageTitle, SideDrawer } from "../components"
import { ThemeContext, SEO } from "../utils"

export default ({ data }) => {
	
	const MediaLink = ({ title, author, link }) => (
		<li key={title} style={{ color: "#495057" }}>
			<a rel="noopener noreferrer" href={link}>
				{title}
			</a>
			&nbsp;-<i>{author}</i>
		</li>
	)

	const {
		author,
		occupation,
		readingList,
		showsList,
		designations,
		unemployed,
	} = data.site.siteMetadata
	const { toString } = useContext(ThemeContext)

	const bookLinks = readingList.map(book => MediaLink(book))
	const showLinks = showsList.map(show => MediaLink(show))

	return (
		<Layout>
	    <SEO title="Home" />
			<PageTitle title="About Me" />
			<Container className="text-center">
			<Image
				style={{width: 300, borderRadius: 300/2, overflow: 'hidden'}} 
				src={`../../images/headshot.jpg`}
				overflow='hidden'
				className="resume"
			/>
				</Container><p></p>
				<Container>
				<article className="w-75 m-auto pt-2 pb-2 text-justify">
					<hr />
					<h5 className="watch-list-title pt-4">
						Book Recs:
					</h5>
					<ul style={{ fontSize: "0.9rem", listStyle: "none" }}>{bookLinks}</ul>
					<h5 className="watch-list-title pt-4">
						Movie Recs:
					</h5>
					<ul style={{ fontSize: "0.9rem", listStyle: "none" }}>{showLinks}</ul>
				</article>
				
				<article className="w-75 m-auto text-left">
				</article>
				<p>
					<Link to="/page-2/" asModal>Page 2 in Modal</Link>
				</p>
				<div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
					<Image />
				</div>
			</Container>
	  </Layout>
	
	)
}

//export default IndexPage

export const query = graphql`
  query {
    site {
      siteMetadata {
        unemployed
        occupation
        author
        designations
        readingList {
          title
          author
          link
        }
        showsList {
          title
          author
          link
        }
      }
    }
  }
`
