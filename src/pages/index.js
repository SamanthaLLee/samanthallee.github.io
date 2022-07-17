import React, { useContext } from "react"
import { graphql } from "gatsby"
import ThemeContext from "../utils/theme"
import { PageLayout } from "../components"
import { SEO } from "../utils"
import { Container, Image, Row, Col } from "react-bootstrap"
import ReactTooltip from 'react-tooltip'

export default ({ data }) => {
	const { firstName, lastName, statusCommon, statusUncommon, statusRare } = data.site.siteMetadata
	const { dark } = useContext(ThemeContext)

	var val = Math.floor(Math.random() * 10)

	if (val > 5) {

	} else if (val > 3) {

	} else {

	}

	// $(function () {
	// 	var $sequence = $("#sequence");
	// 	var sequence = ['I', 'Am', 'So', 'Cool'];
	// 	var position = -1;

	// 	!function loop() {
	// 		position = (position + 1) % sequence.length;
	// 		$sequence.html(sequence[position])
	// 			.fadeIn(1000)
	// 			.delay(3000)
	// 			.fadeOut(1000, loop);
	// 	}();
	// });

	// var example = ['A', 'B', 'C', 'D'];
	// textSequence(0);
	// function textSequence(i) {
	// 	if (example.length > i) {
	// 		setTimeout(function () {
	// 			document.getElementById("sequence").innerHTML = example[i]; fade-in
	// 			textSequence(++i);
	// 		}, 1000); // 1 second (in milliseconds)

	// 	} else if (example.length == i) { // Loop
	// 		textSequence(0);
	// 	}
	// }


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
					className="py-5 my-5 indexTitles">
					<h1
						style={{
							fontSize: "40px",
							color: "black",
						}}
					>
						<span className="first-name">Sam Lin Lee</span>
					</h1>
					<h3 className="positions">Software Engineer @ <a href="https://www.microsoft.com/">Microsoft</a></h3>
					<h3 className="positions"><a href="https://rutgers.edu">Rutgers University</a> Alumna</h3>

					<div className="sequence" id="sequence"></div>

					<a className="no-effect" data-tip data-for='resume' href="/resume">
						<img alt="Resume icon" className="icons" src={dark ? `../../icons/resume-light.png` : `../../icons/resume-dark.png`}></img></a>
					<ReactTooltip arrowColor="transparent" offset="{'bottom': 10}" place='bottom' data-place='bottom' className='tooltip' id='resume' aria-haspopup='true' >
						<p className='tooltip-text'>resume/cv</p>
					</ReactTooltip>

					<a className="no-effect" data-tip data-for='email' href="mailto:samantha.lin.lee@gmail.com?subject=Hello!">
						<img alt="Email icon" className="icons" src={dark ? `../../icons/mail-light.png` : `../../icons/mail-dark.png`}></img></a>
					<ReactTooltip arrowColor="transparent" offset="{'bottom': 10}" place='bottom' className="tooltip" id='email' aria-haspopup='true' >
						<p className='tooltip-text'>samantha.lin.lee@gmail.com</p>
					</ReactTooltip>

					<a className="no-effect" data-tip data-for='linkedin' href="https://www.linkedin.com/in/samanthallee/">
						<img alt="LinkedIn logo" className="icons" src={dark ? `../../icons/linkedin-light.png` : `../../icons/linkedin-dark.png`}></img></a>
					<ReactTooltip arrowColor="transparent" offset="{'bottom': 10}" place='bottom' className='tooltip' id='linkedin' aria-haspopup='true' >
						<p className='tooltip-text'>in/SamanthaLLee</p>
					</ReactTooltip>

					<a className="no-effect" data-tip data-for='github' href="https://github.com/SamanthaLLee">
						<img alt="Github logo" className="icons" src={dark ? `../../icons/github-light.png` : `../../icons/github-dark.png`}></img></a>
					<ReactTooltip arrowColor="transparent" offset="{'bottom': 10}" place='bottom' className='tooltip' id='github' aria-haspopup='true' >
						<p className='tooltip-text'>@SamanthaLLee</p>
					</ReactTooltip>
				</Container>
				<Image
					alt="A digital, cartoonish drawing of Sam. At the right side of the page, she is facing to the left and has her back turned toward you but is looking over her shoulder and smiling. She's kicking her left leg up behind her. She's wearing a yellow t-shirt, jeans, and brown ankle boots. You can also see two tattoos, one on each tricep (left: 爱, right: 健權. Her ear has three gold piercings: two lobe, one helix. She's holding a turquoise laptop that flashes different code snippets. A speech bubble says 'hello!'"
					src={`../../images/me2022.png`}
					className="index-img"
				/>
			</Container>

		</PageLayout>
	)
}

export const query = graphql`
  query {
    site {
      siteMetadata {
        firstName
        lastName
		statusCommon
		statusUncommon
		statusRare
      }
    }
  }
`
