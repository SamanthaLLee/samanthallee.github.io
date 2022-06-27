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
						Hi, there! I'm Sam Lee, a recent graduate of Rutgers University–New Brunswick with a B.S. in
						in Computer Science and Cognitive Science (with a concentration in decision-making) and a completed minor in Political Science.
						I'm based in Seattle, the traditional land of the <a href="https://native-land.ca/maps/territories/suquamish/">Suquamish</a>,
						<a href="https://native-land.ca/maps/territories/puget-sound-salish/">Coast Salish</a>,
						and the <a href="https://native-land.ca/maps/territories/duwamish/">Duwamish People</a>, as well as the greater NYC area, the traditional land of the
						<a href="https://native-land.ca/maps/territories/munsee-lenape/">Munsee Lenape</a> people.</p>


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

					<p>
						I'd like to pursue a PhD in the future, but I'm taking things one step at a time.
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
								Highlights:
							</h5>
							<ul className="text-left themed-text" style={{ fontSize: "0.9rem", listStyle: "none" }}>
								{featureList}
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

