import React from "react"
import { Row, Col, Image } from "react-bootstrap"

import ConditionalLayout from "../components/ConditionalLayout"
import { SEO } from "../utils"

const EasterEgg = () => (
  <ConditionalLayout>

    <SEO title="Hi! 👋" />
		<h1 className="pt-3">Hi! <span role="img" aria-label="The wave emoji in yellow">👋</span></h1>
		<h5>You just found my Easter Egg :)</h5>
		<p></p>
		<p>Here's some more about me:</p>
		<Row>
			<Col sm={1}>
			<Image
				style={{width: '10vw'}} 
				src={`../../images/me.png`}
				overflow='hidden'
				className="resume pb-2 pr-3"
				z-index='100'
			/>
			</Col>
			<Col sm={11}>
			<ul>
				<li>I'm an <a href="https://www.16personalities.com/infp-personality">INFP</a>, a <a href="https://www.enneagraminstitute.com/type-3">3w2</a>, and equal parts Ravenclaw and Hufflepuff (according to <a href="https://www.proprofs.com/quiz-school/story.php?title=mte2mdawoq2srl">Pottermore</a>)</li>
				<li>I know the alphabet backwards</li>
				<li>According to Spotify, I'm in the top 1% of Hozier fans</li>
				<li>I played the flute for ~10 years and now play it recreationally</li>
				<li>Also played the trumpet in a marching band for ~4 years</li>
				<li>I care lots about LGBTQ+ rights and representation</li>
				<li>I recently curated a list of socially relevant resources – check it out <a href="https://samanthallee.github.io/carrd">here</a>!</li>
				<li>Je parle un peu le français</li>
				<li>I love to analyze fiction</li>
				<li>
					<a href="https://matthew-notaro.github.io/">Here</a> <a href="https://www.stephaniephotos.com/">are</a> <a href="https://sruthisoorian.github.io/">some</a> <a href="http://isabella-pham.github.io/">of</a> <a href="https://kuhuhalder.com/">my</a> <a href="https://manasvimedam.github.io/#/">favorite</a> <a href="https://www.jessleecreations.com/">people</a>
				</li>
			</ul>
			</Col>
		</Row>
  </ConditionalLayout>
)



export default EasterEgg