import React, { Component, Fragment, Link } from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import Img from 'gatsby-image'
import Card from "react-bootstrap/Card"

class Lightbox extends Component {
  state = {
    showLightbox: false,
    selectedImage: 0,
  }

  componentDidMount = () => {
    window.addEventListener('keyup', this.handleKeyUp, false)
  }

  componentWillUnmount = () => {
    window.removeEventListener('keyup', this.handleKeyUp, false)
  }

  handleClick = (e, index) => {
    e.preventDefault()
    this.setState({ showLightbox: !this.state.showLightbox, selectedImage: index })
  }

  closeModal = () => {
    this.setState({ showLightbox: false })
  }

  goBack = () => {
    this.setState({ selectedImage: this.state.selectedImage - 1 })
  }

  goForward = () => {
    this.setState({ selectedImage: this.state.selectedImage + 1 })
  }

  handleKeyUp = e => {
    e.preventDefault()
    const { keyCode } = e
    if (this.state.showLightbox) {
      if (keyCode === 37) {
        // Left Arrow Key
        if (this.state.selectedImage > 0) {
          this.setState({ selectedImage: this.state.selectedImage - 1 })
        }
      }
      if (keyCode === 39) {
        // Right Arrow Key
        if (this.state.selectedImage < this.props.images.length - 1) {
          this.setState({ selectedImage: this.state.selectedImage + 1 })
        }
      }
      if (keyCode === 27) {
        // Escape key
        this.setState({ showLightbox: false })
      }
    }
  }

  render() {
    const { images } = this.props
		const { alt } = this.props
		console.log("images")
		console.log(images)
		console.log("this.props")
		console.log(this.props)
		console.log("alt")
		console.log(alt)
    const { showLightbox, selectedImage } = this.state
		console.log(this.props)
    return (
      <Fragment>
			<Gallery fluid className="d-flex flex-wrap">
				{images.map((img, i) => (
					<Card className="text-center img-container image" as={Link} to={img.node.sizes.src} onClick={e => this.handleClick(e, i)}>
			      <Card.Img as={Img} fluid={img.node.sizes.src} sizes={img.node.sizes} className="h-100"/>
			    </Card>	
				))}
			</Gallery>
				
        <LightboxModal visible={showLightbox} onKeyUp={e => this.handleKeyDown(e)}>
          <LightboxContent>
            <Img sizes={images[selectedImage].node.sizes} />
						<Caption>{alt[selectedImage].node.frontmatter.caption}</Caption>
            <Controls>
              <Button onClick={this.closeModal}>Close</Button>
              <LeftRight>
                <Button onClick={this.goBack} disabled={selectedImage === 0}>
                  Previous
                </Button>
                <Button onClick={this.goForward} disabled={selectedImage === images.length - 1}>
                  Next
                </Button>
              </LeftRight>
            </Controls>
          </LightboxContent>
        </LightboxModal>
      </Fragment>
    )
  }
}

const Gallery = styled.div`
  display: grid;
	align-items: center;
  justify-content: center;
	grid-template-columns: 1 fr;
  
	@media (min-width: 700px) {
    grid-template-columns: 1fr 1fr 1fr 1fr;
  }
  @media (min-width: 900px) {
    grid-template-columns: 1fr 1fr 1fr;
  }
  @media (min-width: 1100px) {
    grid-template-columns: repeat(5, 1fr);
  }
  grid-gap: 2px 2px;
  .gatsby-image-outer-wrapper {
    height: 100%;
  }
`

const Button = styled.button``

const LightboxModal = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  background: rgba(0, 0, 0, 0.5);
  opacity: ${props => (props.visible ? '1' : '0')};
  visibility: ${props => (props.visible ? 'visible' : 'hidden')};
`
const LightboxContent = styled.div`
  margin: 15px;
  max-width: 700px;
  width: 100%;
`

const Controls = styled.div`
  display: flex;
  justify-content: space-between;
`

const Caption = styled.div`
	font-size: 30px;
  display: flex;
  justify-content: space-between;
	z-index: 9999999;
`

const LeftRight = styled.div`
  button:first-child {
    margin-right: 10px;
  }
`

Lightbox.propTypes = {
  images: PropTypes.array.isRequired,
}

export default Lightbox