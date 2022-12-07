import React, { useCallback, useContext } from "react"
import { graphql } from "gatsby"
import ThemeContext from "../utils/theme"
import { PageLayout } from "../components"
import { SEO } from "../utils"
import { Container, Image, Row, Col } from "react-bootstrap"
import ReactTooltip from "react-tooltip"
import Particles from "react-particles"
import { loadFull } from "tsparticles"

export default ({ data }) => {
  const {
    firstName,
    lastName,
    statusCommon,
    statusUncommon,
    statusRare,
  } = data.site.siteMetadata
  const { dark } = useContext(ThemeContext)

  const particlesInit = useCallback(async engine => {
    console.log(engine)
    await loadFull(engine)
  }, [])

  const particlesLoaded = useCallback(async container => {
    await console.log(container)
  }, [])

  var val = Math.floor(Math.random() * statusCommon.length)
  var val2 = Math.floor(Math.random() * statusCommon.length)

  while (val == val2) {
    val2 = Math.floor(Math.random() * statusCommon.length)
  }

  // not in use
  textSequence(val)
  function textSequence(i) {
    if (statusCommon.length > i) {
      setTimeout(function () {
        if (document.getElementById("sequence") != null) {
          document.getElementById("sequence").innerHTML =
            "<i> → " + statusCommon[i] + "</i>"
          val = Math.floor(Math.random() * statusCommon.length)
          textSequence(val)
        }
      }, 5000)
    }
  }

  return (
    <>
      <PageLayout>
        <SEO title="Home" />
        <Container className="text-center pt-5 mt-5" fluid>
          <div className="landing-blurb">
            <h1 className="mb-3">
              Hi, I'm <a href="/about">Sam</a>!
            </h1>

            <h4 className="positions">
              I wear many hats: technologist, interdisciplinary learner, serial
              hobbyist. Reducer, reuser, recycler. Sometimes, those beanies with
              the little cat ears.
            </h4>

            <h4 className="positions">
              Current software engineer @ Microsoft.
            </h4>

            {/* <a
            className="no-effect"
            data-tip
            data-for="resume"
            href="docs/Samantha-Lee-Resume.pdf"
          >
            <img
              alt="Resume icon"
              className="icons"
              src={
                dark
                  ? `../../icons/resume-light.png`
                  : `../../icons/resume-dark.png`
              }
            ></img>
          </a>
          <ReactTooltip
            arrowColor="transparent"
            offset="{'bottom': 10}"
            place="bottom"
            data-place="bottom"
            className="tooltip"
            id="resume"
            aria-haspopup="true"
          >
            <p className="tooltip-text">resume</p>
          </ReactTooltip> */}

            <a
              className="no-effect"
              data-tip
              data-for="email"
              href="mailto:samantha.lin.lee@gmail.com?subject=Hello!"
            >
              <img
                alt="Email icon"
                className="icons"
                src={
                  dark
                    ? `../../icons/mail-light.png`
                    : `../../icons/mail-dark.png`
                }
              ></img>
            </a>
            <ReactTooltip
              arrowColor="transparent"
              offset="{'bottom': 10}"
              place="bottom"
              className="tooltip"
              id="email"
              aria-haspopup="true"
            >
              <p className="tooltip-text">samantha.lin.lee@gmail.com</p>
            </ReactTooltip>

            <a
              className="no-effect"
              data-tip
              data-for="linkedin"
              href="https://www.linkedin.com/in/samanthallee/"
            >
              <img
                alt="LinkedIn logo"
                className="icons"
                src={
                  dark
                    ? `../../icons/linkedin-light.png`
                    : `../../icons/linkedin-dark.png`
                }
              ></img>
            </a>
            <ReactTooltip
              arrowColor="transparent"
              offset="{'bottom': 10}"
              place="bottom"
              className="tooltip"
              id="linkedin"
              aria-haspopup="true"
            >
              <p className="tooltip-text">in/SamanthaLLee</p>
            </ReactTooltip>

            <a
              className="no-effect"
              data-tip
              data-for="github"
              href="https://github.com/SamanthaLLee"
            >
              <img
                alt="Github logo"
                className="icons"
                src={
                  dark
                    ? `../../icons/github-light.png`
                    : `../../icons/github-dark.png`
                }
              ></img>
            </a>
            <ReactTooltip
              arrowColor="transparent"
              offset="{'bottom': 10}"
              place="bottom"
              className="tooltip"
              id="github"
              aria-haspopup="true"
            >
              <p className="tooltip-text">@SamanthaLLee</p>
            </ReactTooltip>
          </div>
        </Container>
      </PageLayout>
      <Particles
        id="tsparticles"
        init={particlesInit}
        loaded={particlesLoaded}
        options={{
          fpsLimit: 120,
          interactivity: {
            events: {
              onClick: {
                enable: true,
                mode: "push",
              },
              onHover: {
                enable: true,
                mode: "repulse",
              },
              resize: true,
            },
            modes: {
              push: {
                quantity: 4,
              },
              repulse: {
                distance: 200,
                duration: 0.4,
              },
            },
          },
          particles: {
            move: {
              bounce: false,
              direction: "up",
              enable: true,
              outModes: "out",
              random: false,
              speed: 1,
              straight: false,
            },
            number: { density: { enable: true, area: 800 }, value: 20 },
            opacity: {
              value: 0.3,
            },
            shape: {
              type: "image",
              options: {
                images: [
                  {
                    src:
                      "https://raw.githubusercontent.com/Tarikul-Islam-Anik/Animated-Fluent-Emojis/master/Emojis/Smilies/Heart%20on%20Fire.png",
                    width: 32,
                    height: 32,
                    replaceColor: false,
                  },
                  {
                    src:
                      "https://raw.githubusercontent.com/Tarikul-Islam-Anik/Animated-Fluent-Emojis/master/Emojis/Animals/Butterfly.png",
                    width: 32,
                    height: 32,
                  },
                ],
              },
            },
            size: {
              value: { min: 10, max: 10 },
            },
          },
          detectRetina: true,
        }}
      />
    </>
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
