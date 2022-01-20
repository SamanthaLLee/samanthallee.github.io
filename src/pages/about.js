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

	const ConfLink = ({ title, link }) => (
		<li key={title}>
			{bullet} <a rel="noopener noreferrer" href={link}>
				{title}
			</a>
		</li>
	)

	const {
		author,
		occupation,
		readingList,
		showsList,
		animeList,
		hackathons,
		features,
		essayList,
		designations,
		interests,
		passions,
		dabblings,
		eager,
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
	const essays = essayList.map(e => MediaLink(e))
	const featureList = features.map(f => ConfLink(f))
	const hackathonList = hackathons.map(h => ConfLink(h))
	const anime = animeList.map(a => ConfLink(a))
	const confs = conferences.map(conf => ConfLink(conf))


	return (
		<PageLayout>
			<SEO title="About" />
			<PageTitle title="About" />
			<Container className="text-center">
				<Link className="no-effect" to="/easter-egg/" asModal><Image
					alt="A headshot of Sam. She's wearing a blue, vertically striped button-up, and a black blazer. She has short hair, parted to the side. She smiles with her teeth."
					style={{ width: 300, borderRadius: 300 / 2, overflow: 'hidden' }}
					src={`../../images/headshot.jpg`}
					overflow='hidden'
					className="resume"
				/></Link>
				<article className="w-75 m-auto pt-3 pb-2 text-justify">
					<p>
						Hi, there! I'm Sam Lee (she/her/hers), a senior honors student at Rutgers University–New Brunswick pursuing a double major
						in Computer Science and Cognitive Science (with a concentration in decision-making) and a minor in Political Science.
						I'm located in the greater NYC area originally inhabited by the <a href="https://native-land.ca/maps/territories/munsee-lenape/">Munsee Lenape</a> people.</p>

					<p>
						I like to stay busy! I'm currently the co-president of Rutgers Women in Computer Science and the president and founder of the Rutgers Ethical Technology Club (Ethitech).
						I also volunteer as a data analyst for <a href="https://leadlocally.org/">Lead Locally</a>, a non-profit dedicated to electing community leaders who pledge to fight against fossil fuel projects.
						I am additionally a part of the <a href="https://rewritingthecode.org/">Rewriting the Code</a>, <a href="https://girlswhocode.com/">Girls Who Code</a>, <a href="https://www.impactlabs.io/">Impact Labs</a>, and <a href="https://outintech.com/">Out in Tech</a> communities.</p>

					<p>
						Come August 2022, I will be joining Microsoft's Redmond team as a software engineer.
					</p>
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
								Eager to...
							</h5>

							<ul className="text-left themed-text" style={{ fontSize: "0.9rem", listStyle: "none" }}>
								{eager.map((attr, i) => (
									<span key={attr}>
										<li>{bullet} {attr}</li>
									</span>
								))}
							</ul>
						</Col>
					</Row>

					<div className="text-center mb-5"><p></p>

						<h5 className="watch-list-title">
							Notable Skills
						</h5><p></p>


						<Badge pill variant="success" className="img-hover px-3 mb-1 mr-1" > <h6 className="text-white my-0">[ Preferred ]</h6></Badge>
						<Badge pill style={{ backgroundColor: "#ff9100" }} className="img-hover px-3 mb-1 mr-1" > <h6 className="text-white my-0">[ Comfortable ]</h6> </Badge>
						<Badge pill variant="danger" className="img-hover px-3 mb-1 mr-1" > <h6 className="text-white my-0">[ Still Learning ]</h6> </Badge>


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
						I'd like to go to grad school in the future, but I'm taking things one step at a time.
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

						<Col md={6}>
							<h5 className="watch-list-title">
								Places I'm featured:
							</h5>
							<ul className="text-left themed-text" style={{ fontSize: "0.9rem", listStyle: "none" }}>
								{featureList}
							</ul>
						</Col>


					</Row>
					<Row>
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
								Hackathon acknowledgements:
							</h5>
							<ul className="text-left themed-text" style={{ fontSize: "0.9rem", listStyle: "none" }}>
								{hackathonList}
							</ul>
						</Col>


					</Row>
					<Row>
						<Col md={6}>
							<h5 className="watch-list-title">
								Book recs:
							</h5>
							<ul className="text-left themed-text" style={{ fontSize: "0.9rem", listStyle: "none" }}>
								{bookLinks}
							</ul>
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
					<Row className="pb-4">
						<Col md={6}>
							<h5 className="watch-list-title">
								Anime recs:
							</h5>
							<ul className="text-left themed-text" style={{ fontSize: "0.9rem", listStyle: "none" }}>
								{anime}</ul>
						</Col>

						<Col md={6}>
							<h5 className="watch-list-title">
								Video essay recs:
							</h5>
							<ul className="text-left themed-text" style={{ fontSize: "0.9rem", listStyle: "none" }}>
								{essays}
							</ul>
						</Col>
					</Row>

				</article>
			</Container>
		</PageLayout >

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
		eager
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
		essayList {
          title
          author
          link
        }
		conferences {
			title
			link
		}			
		animeList {
			title
			link
		}
		hackathons {
			title
			link
		}
		features {
			title
			link
		}
      }
    }
  }
`

