import React, { useContext } from "react"
import { graphql } from "gatsby"
import ThemeContext from "../utils/theme"
import { PageLayout } from "../components"
import { SEO } from "../utils"
import { Container, Image } from "react-bootstrap"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import ReactTooltip from 'react-tooltip'

export default ({ data }) => {
  const { unemployed, firstName, lastName, occupation } = data.site.siteMetadata
  const { dark } = useContext(ThemeContext)
  return (
    <PageLayout>
      <SEO title="Home" />
      <Container className="pt-5 mt-5 text-left" fluid>
        <Container 
				style={{ 
					position: 'absolute',
					left: '7vw',
					top: '10vh'
				}}
				className="py-5 my-5">
          <h1
            style={{
              fontSize: "40px",
              color: "black",
            }}
          >
            <span className="first-name">Samantha L. Lee</span>
          </h1>

					<h3 className="positions">Junior & TA @ <a href="https://rutgers.edu">Rutgers</a></h3>
					<h3 className="positions">Incoming Intern @ <a href="https://www.audible.com/">Audible</a></h3>
					<h3 className="positions">Former Intern @ <a href="https://investor.vanguard.com/home">Vanguard</a></h3>
          <h3 className="positions">Former RA @ <a href="https://www.infoseeking.org/index.php">InfoSeeking</a></h3>

	          <a data-tip data-for='resume' href="docs/Samantha-Lee-Resume.pdf">
							<img className="icons" src={dark ? `../../icons/resume-light.png` : `../../icons/resume-dark.png`}></img></a>
							<ReactTooltip arrowColor="transparent" offset="{'bottom': 10}" place='bottom' data-place='bottom' className='tooltip' id='resume' aria-haspopup='true' >
							 <p className='tooltip-text'>resume</p>
							</ReactTooltip>

						<a data-tip data-for='email' href="mailto:samantha.lin.lee@gmail.com?subject=Hello!">
							<img className="icons" src={dark ? `../../icons/mail-light.png` : `../../icons/mail-dark.png`}></img></a>
							<ReactTooltip arrowColor="transparent" offset="{'bottom': 10}" place='bottom' className="tooltip" id='email' aria-haspopup='true' >
							 <p className='tooltip-text'>samantha.lin.lee@gmail.com</p>
							</ReactTooltip>

						<a data-tip data-for='linkedin' href="https://www.linkedin.com/in/samanthallee/">
							<img className="icons" src={dark ? `../../icons/linkedin-light.png` : `../../icons/linkedin-dark.png`}></img></a>
							<ReactTooltip arrowColor="transparent" offset="{'bottom': 10}" place='bottom' className='tooltip' id='linkedin' aria-haspopup='true' >
							 <p className='tooltip-text'>in/SamanthaLLee</p>
							</ReactTooltip>

						<a data-tip data-for='github' href="https://github.com/SamanthaLLee">
							<img className="icons" src={dark ? `../../icons/github-light.png` : `../../icons/github-dark.png`}></img></a>
							<ReactTooltip arrowColor="transparent" offset="{'bottom': 10}" place='bottom' className='tooltip' id='github' aria-haspopup='true' >
							 <p className='tooltip-text'>@SamanthaLLee</p>
							</ReactTooltip>

        </Container>
      </Container>
			<Container className="text-right mr-5">
			<Image
				alt="A black and white speech bubble gif that grows, spells 'Welcome!!', then shrinks into nothing."
			  src={`../../icons/welcome2.png`}
	      style={{ 
					position: 'absolute',
					width: '20vw',
					right: '3vw',
					bottom: '5vh',
					marginBottom: '8vw',
					marginRight: '27vw'
				}}
			/>
			<Image
				alt="A hand-drawn sketch of Sam's head (in blue if you're in light mode, yellow if you're in dark). She has short hair with a little flick in the front and the slightest hint of a smile."
			  src={dark ? `../../icons/me-yellow.png` : `../../icons/me-blue.PNG`}
	      style={{ 
					position: 'absolute',
					width: '35vw',
					right: '3vw',
					bottom: '5vh'
				}}
			/>
			</Container>
    </PageLayout>
  )
}

export const query = graphql`
  query {
    site {
      siteMetadata {
        unemployed
        firstName
        lastName
        occupation
      }
    }
  }
`
