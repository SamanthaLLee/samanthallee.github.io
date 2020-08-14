import React, { useContext } from "react"
import { Link } from "gatsby-plugin-modal-routing"
import { Container, Image } from "react-bootstrap"
import Layout from "../components/layout"
import { PageLayout, PageTitle, SideDrawer } from "../components"
import { ThemeContext, SEO } from "../utils"
import { Row, Col, Table } from "react-bootstrap"
import Badge from "react-bootstrap/Badge"

export default ({ data }) => {
	
	const MediaLink = ({ title, author, link }) => (
		<li key={title} style={{ color: "#495057" }}>
			> <a rel="noopener noreferrer" href={link}>
				{title}
			</a>
			&nbsp;-<i>{author}</i>
		</li>
	)
	
	const ConfLink = ({ name, link }) => (
		<li key={name} style={{ color: "#495057" }}>
			> <a rel="noopener noreferrer" href={link}>
				{name}
			</a>
		</li>
	)

	const {
		author,
		occupation,
		readingList,
		showsList,
		designations,
		interests,
		passions,
		dabblings,
		learnings,
		conferences,
		unemployed,
		hobbies,
		advanced,
		intermediate,
		basic,
	} = data.site.siteMetadata
	const { toString } = useContext(ThemeContext)

	const bookLinks = readingList.map(book => MediaLink(book))
	const showLinks = showsList.map(show => MediaLink(show))
	const confs = conferences.map(conf => ConfLink(conf))

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
				<article className="w-75 m-auto pt-3 pb-2 text-justify">
          <p>
					Hello! I'm Sam Lee (she/her), a <b>rising junior</b> at Rutgers University–New Brunswick pursuing a double major
					in Computer Science and Cognitive Science. 
          </p>
					
					<Row className="py-4">
						<Col md={3}>
						<h5 className="watch-list-title">
							Interested in...
						</h5>	
						<ul className="text-left themed-text" style={{ fontSize: "0.9rem", listStyle: "none" }}>
							{interests.map((attr, i) => (
									<span key={attr}>
									<li>> {attr}</li>
									</span>
								))}	
						</ul>
						</Col>
						
						<Col md={3}>
						<h5 className="watch-list-title">
	            Passionate about...
	          </h5>					
						<ul className="text-left themed-text" style={{ fontSize: "0.9rem", listStyle: "none" }}>
							{passions.map((attr, i) => (
		              <span key={attr}>
									<li>> {attr}</li>
		              </span>
		            ))}	
						</ul>
						</Col>
						<Col md={3}>
						<h5 className="watch-list-title">
	            Learning about...
	          </h5>
						<ul className="text-left themed-text" style={{ fontSize: "0.9rem", listStyle: "none" }}>
							{learnings.map((attr, i) => (
									<span key={attr}>
									<li>> {attr}</li>
									</span>
								))}	
						</ul>			
						</Col>
						<Col md={3}>
						<h5 className="watch-list-title">
							I dabble in...
						</h5>
						
						<ul className="text-left themed-text" style={{ fontSize: "0.9rem", listStyle: "none" }}>
							{dabblings.map((attr, i) => (
									<span key={attr}>
										<li>> {attr}</li>
									</span>
								))}	
						</ul>
						</Col>
					</Row>
					
					<div className="text-center mb-5"><p></p>
					<h5 className="watch-list-title">
						Skills
					</h5>
				    {advanced.map(skill => (
				      <Badge key={skill} pill variant="success" className="img-hover px-3 mb-1 mr-1">
				        <h6 className="text-white my-0">{skill}</h6>
				      </Badge>
				    ))}
						{intermediate.map(skill => (
				      <Badge key={skill} pill style={{backgroundColor:"#ff9100"}} className="img-hover px-3 mb-1 mr-1">
				        <h6 className="text-white my-0">{skill}</h6>
				      </Badge>
				    ))}
						{basic.map(skill => (
				      <Badge key={skill} pill variant="danger" className="img-hover px-3 mb-1 mr-1">
				        <h6 className="text-white my-0">{skill}</h6>
				      </Badge>
				    ))}
				  </div>
					
          <p>
					<b>I am actively seeking summer 2021 internships</b> as well as new research opportunities. In the future, 
					I hope to pursue a Masters in Computer Science and conduct socially impactful research.
          </p>
					
          <p>
            Check out my <Link to="/projects">projects</Link> to see what I've
            been up to!
          </p>
        </article>
			

          <hr />
					
					<article className="w-75 m-auto text-justify">
					
					<Row className="pt-4">
						<Col md={6}>
						<h5 className="watch-list-title">
							Conferences attended:
						</h5>
						<ul className="text-left" style={{ fontSize: "0.9rem", listStyle: "none" }}>
						{confs}
						</ul>
						</Col>
						
						<Col md={6}>
						<h5 className="watch-list-title">
							Hobbies:
						</h5>					
						<ul className="text-left themed-text" style={{ fontSize: "0.9rem", listStyle: "none" }}>
							{hobbies.map((attr, i) => (
									<span key={attr}>
									<li>> {attr}</li>
									</span>
								))}	
						</ul>
						</Col>
					</Row>
					<Row className="pb-4">
						<Col md={6}>
						<h5 className="watch-list-title">
	            Book recs:
	          </h5>
	          <ul className="text-left" style={{ fontSize: "0.9rem", listStyle: "none" }}>
						<li style={{ color: "#495057" }}>
							> <Link to="/easter-egg/" asModal>
								About Me: Extended
							</Link>
							&nbsp;-<i>Samantha Lee</i>
						</li>
						{bookLinks}</ul>
						</Col>
						
						<Col md={6}>
						<h5 className="watch-list-title">
							Movie recs:
						</h5>
						<ul className="text-left"style={{ fontSize: "0.9rem", listStyle: "none" }}>
					 {showLinks}
					 </ul>
						</Col>
					</Row>
						
					</article>
					
          
         
      
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
				interests
				passions
				dabblings
				learnings
				hobbies
				advanced
				intermediate
				basic
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
				conferences {
					name 
					link
				}				
      }
    }
  }
`

