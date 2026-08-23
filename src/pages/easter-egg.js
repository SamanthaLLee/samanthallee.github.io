import React from "react"
import { Row, Col, Image } from "react-bootstrap"
import ConditionalLayout from "../components/ConditionalLayout"
import { SEO } from "../utils"

const EasterEgg = () => (
  <ConditionalLayout>
    <SEO title="Hi! 👋" />
    <h1 className="pt-3">
      Hi!{" "}
      <img
        src="https://raw.githubusercontent.com/Tarikul-Islam-Anik/Animated-Fluent-Emojis/master/Emojis/Hand%20gestures/Waving%20Hand%20Light%20Skin%20Tone.png"
        alt="Waving Hand Light Skin Tone"
        width="35"
        height="35"
      />
    </h1>
    <h5>You just found my Easter Egg :)</h5>
    <p></p>
    <p>Here's some more about me, in no particular order:</p>
    <Row>
      <Col sm={11}>
        <ul>
          <li>My favorite bird is the ruby-throated hummingbird; my favorite fish is the Chinook salmon.</li>
          <li>I love art and have novice skills in charcoal drawing, block printing, and embroidery.</li>
          <li>♌︎☉ ♎︎☽ ♒︎↑ (I invite you to explain astrology to me).</li>
          <li>Every year, I submit an entry to the <a href="https://adamcadre.ac/lyttle/">Lyttle Lytton Contest</a>.</li>
          <li>I can recite the alphabet backwards.</li>
          <li>I was introduced to coding through Tumblr – thanks, Tumblr!</li>
          <li>
            I played the flute for ~10 years and now play it recreationally.
          </li>
          <li>I also played the trumpet in a marching band for ~4 years.</li>
          <li>Je parle un peu le français.</li>
          <li>I have four tattoos and nine piercings (and counting).</li>
          <li>
            <a href="https://matthew-notaro.github.io/">I</a>{" "}
            <a href="https://www.stephaniephotos.com/">am</a>{" "}
            <a href="https://www.jessleecreations.com/">surrounded</a>{" "}
            <a href="https://sruthisoorian.github.io/">by</a>{" "}
            <a href="http://sandhya-veludandi.github.io/">fantastic</a>{" "}
            <a href="http://isabella-pham.github.io/">people</a>.
          </li>
        </ul>
      </Col>
    </Row>
  </ConditionalLayout>
)

export default EasterEgg
