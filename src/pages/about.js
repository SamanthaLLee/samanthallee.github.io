import React, { useContext } from "react"
import { Link } from "gatsby-plugin-modal-routing"
import { Container, Card, Image } from "react-bootstrap"
import { PageLayout, PageTitle } from "../components"
import { ThemeContext, SEO } from "../utils"
import { Row, Col } from "react-bootstrap"

export default ({ data }) => {

	const bullet = '>'
	const lessThan = '<'

	const MediaLink = ({ title, author, link, year }) => (
		<li key={title}>
			{bullet} <a rel="noopener noreferrer" href={link}>
				{title}
			</a>
			&nbsp; ({year}) – {author}
		</li>
	)

	const ConfLink = ({ title, link, year }) => (
		<li key={title}>
			{bullet} <a rel="noopener noreferrer" href={link}>
				{title}
			</a>
			&nbsp; ({year})
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
						Hi, there! I'm Sam Lee, a recent graduate of Rutgers University–New Brunswick with a B.S.
						in Computer Science and Cognitive Science (with a concentration in decision-making) and a completed minor in Political Science.
						I'm based in Seattle and the greater NYC area, which are the traditional lands of the <a href="https://native-land.ca/maps/territories/puget-sound-salish/">Coast Salish</a> and <a href="https://native-land.ca/maps/territories/munsee-lenape/">Munsee Lenape</a> people, respectively.</p>

					<p>
						I'm proud to be a member of several <a href="/activities">communities</a> that span across various causes and interests. Special shout-out to Rutgers Women in Computer Science and Rutgers Ethitech! ❤️
					</p>

					<Row className="py-2">
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

						<Col md={12}>
							<h5 className="watch-list-title">
								Highlights:
							</h5>
							<ul className="text-left themed-text" style={{ fontSize: "0.9rem", listStyle: "none" }}>
								{featureList}
							</ul>
						</Col>

					</Row>
					<Row>
						<Col md={6}>
							<h5 className="watch-list-title">
								Movie recs:
							</h5>
							<ul className="text-left themed-text" style={{ fontSize: "0.9rem", listStyle: "none" }}>
								{showLinks}
							</ul>
						</Col>
						<Col md={6}>
							<h5 className="watch-list-title">
								Anime recs:
							</h5>
							<ul className="text-left themed-text" style={{ fontSize: "0.9rem", listStyle: "none" }}>
								{anime}</ul>
						</Col>


					</Row>

				</article><br></br>

				<div class="gr m-auto text-justify">
					<div id="gr_updates_widget">
						<iframe sandbox id="the_iframe" src="https://goodreads.com/widgets/user_update_widget?height=250&num_updates=10&user=25279873&width=500" width="98%" height="95%" frameborder="0"></iframe>
						<div id="gr_footer">
							<a href="https://www.goodreads.com/"><img alt="Goodreads: Book reviews, recommendations, and discussion" src="https://s.gr-assets.com/images/layout/goodreads_logo_140.png" /></a>
						</div>
					</div>
				</div><br></br><br></br>


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
		  year
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
			year
		}
		hackathons {
			title
			link
		}
		features {
			title
			link
			year
		}
      }
    }
  }
`

