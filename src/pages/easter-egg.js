import React from "react"
import { Row, Col, Image } from "react-bootstrap"
import ConditionalLayout from "../components/ConditionalLayout"
import { SEO } from "../utils"
import "../styles/_themes.scss"

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
          <li>
            I'm an{" "}
            <a href="https://www.16personalities.com/infj-personality">INFJ</a>{" "}
            and a <a href="https://www.enneagraminstitute.com/type-3">3w2</a>
          </li>
          <li>♌︎☉ ♎︎☽ ♒︎↑ (I invite you to explain astrology to me)</li>
          <li>I know the alphabet backwards</li>
          <li>I was introduced to coding through Tumblr – thanks, Tumblr!</li>
          <li>
            I played the flute for ~10 years and now play it recreationally
          </li>
          <li>I also played the trumpet in a marching band for ~4 years</li>
          <li>Je parle un peu le français</li>
          <li>
            Some of my favorite foods are poke, mangoes, and{" "}
            <a href="https://thewoksoflife.com/shrimp-rice-noodle-rolls-cheung-fun/">
              ha cheung
            </a>
          </li>
          <li>A firm believer that Percy Jackson {">"} Harry Potter</li>
          <li>
            I love animals! Cats and dogs are equally good, and I have a soft
            spot for rats and mice{" "}
            <img
              src="https://raw.githubusercontent.com/Tarikul-Islam-Anik/Animated-Fluent-Emojis/master/Emojis/Animals/Mouse%20Face.png"
              alt="Mouse Face"
              width="25"
              height="25"
            />
          </li>
          <li>
            I'm fairly active on{" "}
            <a href="https://instagram.com/sam.lin.lee/">Instagram</a>
          </li>
          <li>I have four tattoos and seven piercings (and counting)</li>
          <li>
            <a href="https://matthew-notaro.github.io/">Here</a>{" "}
            <a href="https://www.stephaniephotos.com/">are</a>{" "}
            <a href="https://sruthisoorian.github.io/">some</a>{" "}
            <a href="http://sandhya-veludandi.github.io/">of</a>{" "}
            <a href="http://isabella-pham.github.io/">my</a>{" "}
            <a href="https://kuhuhalder.com/">very</a>{" "}
            <a href="https://manasvimedam.github.io/#/">favorite</a>{" "}
            <a href="https://www.jessleecreations.com/">people</a>
          </li>
        </ul>
      </Col>
    </Row>
  </ConditionalLayout>
)

export default EasterEgg
