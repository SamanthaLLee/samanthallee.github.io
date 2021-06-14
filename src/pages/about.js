import React, { useContext } from "react"
import { Link } from "gatsby-plugin-modal-routing"
import { Container, Card, Image } from "react-bootstrap"
import { PageLayout, PageTitle } from "../components"
import { ThemeContext, SEO } from "../utils"
import { Row, Col } from "react-bootstrap"
import Badge from "react-bootstrap/Badge"

export default ({ data }) => {

	const bullet = '>'
	const lessThan = '<'

	const MediaLink = ({ title, author, link }) => (
		<li key={title}>
			{bullet} <a rel="noopener noreferrer" href={link}>
				{title}
			</a>
			&nbsp;-<i>{author}</i>
		</li>
	)

	const ConfLink = ({ name, link }) => (
		<li key={name}>
			{bullet} <a rel="noopener noreferrer" href={link}>
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
		<PageLayout>
			<SEO title="About" />
			<PageTitle title="About" />
			<Container className="text-center">
				<Link to="/easter-egg/" asModal><Image
					alt="A headshot of Sam. She's wearing a blue, vertically striped button-up, and a black blazer. She has short hair, parted to the side. She smiles with her teeth."
					style={{ width: 300, borderRadius: 300 / 2, overflow: 'hidden' }}
					src={`../../images/headshot.jpg`}
					overflow='hidden'
					className="resume"
				/></Link>
				<article className="w-75 m-auto pt-3 pb-2 text-justify">
					<p>
						Hello! I'm Sam Lee (she/her/hers), a senior honors student at Rutgers University–New Brunswick pursuing a double major
						in Computer Science and Cognitive Science (with a concentration in decision-making) and a minor in Political Science.
					I'm located in the greater NYC area originally inhabited by the <a href="https://native-land.ca/maps/territories/munsee-lenape/">Munsee Lenape</a> people.</p>

					<p>
						I like to stay busy! I'm currently the co-president of Rutgers Women in Computer Science and the president and founder of the Rutgers Ethical Technology Club (Ethitech).
						I also volunteer as a data analyst for Lead Locally, a non-profit dedicated to electing community leaders who pledge to fight against fossil fuel projects.</p>
					<p>
						I am additionally a part of the <a href="">Impact Labs</a>, <a href="">Out in Tech</a>, <a href="">Rewriting the Code</a>, and <a href="">Girls Who Code</a> communities.</p>

					<Row className="py-4">
						<Col md={3}>
							<h5 className="watch-list-title">
								Interested in...
						</h5>
							<ul className="text-left themed-text" style={{ fontSize: "0.9rem", listStyle: "none" }}>
								{interests.map((attr, i) => (
									<span key={attr}>
										<li>{bullet} {attr}</li>
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
										<li>{bullet} {attr}</li>
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
										<li>{bullet} {attr}</li>
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
										<li>{bullet} {attr}</li>
									</span>
								))}
							</ul>
						</Col>
					</Row>

					<div className="text-center mb-5"><p></p>

						<h5 className="watch-list-title">
							Skills
					</h5><p></p>

						<Card
							className="mx-auto my-auto"
							border-color="#f2f2f2"
							style={{ width: '21rem' }}>
							<Card.Body>
								<Badge pill variant="success" className="img-hover px-3 mb-1 mr-1" > <h6 className="text-white my-0">4+ years</h6></Badge>
								<Badge pill style={{ backgroundColor: "#ff9100" }} className="img-hover px-3 mb-1 mr-1" > <h6 className="text-white my-0">2-3 years</h6> </Badge>
								<Badge pill variant="danger" className="img-hover px-3 mb-1 mr-1" > <h6 className="text-white my-0">{lessThan}2 years</h6> </Badge>
							</Card.Body>
						</Card>

						<p></p>
						{advanced.map(skill => (
							<Badge key={skill} pill variant="success" className="img-hover px-3 mb-1 mr-1">
								<h6 className="text-white my-0">{skill}</h6>
							</Badge>
						))}
						{intermediate.map(skill => (
							<Badge key={skill} pill style={{ backgroundColor: "#ff9100" }} className="img-hover px-3 mb-1 mr-1">
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
						I am actively seeking new research opportunities. In the future,
						I hope to pursue a Masters in a field like tech policy that combines computer and social sciences.
          </p>

					<p>
						Check out my <Link to="/projects">projects</Link> or <Link to="/gallery">gallery</Link> to see what I've
            been up to!
          </p>
				</article>


				<hr className="separator" />

				<article className="w-75 m-auto text-justify">

					<Row className="pt-4">
						<Col md={6}>
							<h5 className="watch-list-title">
								Conferences attended:
						</h5>
							<ul className="text-left themed-text" style={{ fontSize: "0.9rem", listStyle: "none" }}>
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
										<li>{bullet} {attr}</li>
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
							<ul className="text-left themed-text" style={{ fontSize: "0.9rem", listStyle: "none" }}>
								<li>
									{bullet} <Link to="/easter-egg/" asModal>
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
							<ul className="text-left themed-text" style={{ fontSize: "0.9rem", listStyle: "none" }}>
								{showLinks}
							</ul>
						</Col>
					</Row>

				</article>
			</Container>
		</PageLayout>

	)
}

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

