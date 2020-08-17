import React, { Component, Fragment, Link } from 'react'
import Lightbox from 'react-image-lightbox';
import 'react-image-lightbox/style.css';

import Header from '../components/Header'
import Layout from '../components/layout'

import PropTypes from 'prop-types'
import styled from 'styled-components'
import Img from 'gatsby-image'
import Card from "react-bootstrap/Card"

import { PageLayout, PageTitle } from "../components"
import { SEO, Utils } from "../utils"

export default class MyLightbox extends Component {
	state = {
		photoIndex: 0,
		isOpen: false,
	};
	
	goBack = () => {
    
  }

  goForward = () => {
    this.setState({ selectedImage: this.state.selectedImage + 1 })
  }
	
	handleClick = (e, index) => {
		e.preventDefault()
		this.setState({ isOpen: !this.state.isOpen, photoIndex: index })
	}
	
	isEnd = (currentIndex, images) => {
		if(currentIndex == images.length){
			return true;
		}
	}
	
	isStart = (currentIndex, images) => {
		if(currentIndex == 0){
			return true;
		}
	}
	
	//{() => this.setState({ isOpen: true })}

  render() {
    const { photoIndex, isOpen } = this.state;
		const { images } = this.props
		const { alt } = this.props
		const customStyles = {
		  content : {
		    zindex: 100000
		  }
		};
    return (
      <div>
			<Layout>
			
		 <SEO title="Gallery" />
		 <PageTitle title="Gallery" />
			
				<Gallery fluid className="d-flex flex-wrap">
					{images.map((img, i) => (
						<Card className="text-center img-container image" as={Link} to={img.node.sizes.src}  onClick={e => this.handleClick(e, i)}>
				      <Card.Img as={Img} fluid={img.node.sizes.src} sizes={img.node.sizes} className="h-100"/>
				    </Card>	
					))}
				</Gallery>

				{!isOpen && (<Header />)}
			 
			  {isOpen && (
          <Lightbox
						className="lightbox-z-index"
						reactModalStyle={customStyles}
						imageLoadErrorMessage="Uh oh! Something went wrong :("
						imageCaption={alt[photoIndex].node.frontmatter.caption}
            mainSrc={images[photoIndex].node.sizes.src}
            nextSrc={this.isEnd(photoIndex, images) ? '' : images[(photoIndex + 1) % images.length].node.sizes.src}
            prevSrc={this.isStart(photoIndex, images) ? '' : images[(photoIndex + images.length - 1) % images.length].node.sizes.src}
            onCloseRequest={() => this.setState({ isOpen: false })}
            onMovePrevRequest={() =>
              this.setState({
								photoIndex: this.state.photoIndex - 1,
                //photoIndex: (photoIndex + images.length - 1) % images.length,
              })
            }
            onMoveNextRequest={() =>
              this.setState({
								photoIndex: this.state.photoIndex + 1,
                //photoIndex: (photoIndex + 1) % images.length,
              })
            }
          />
        )}
					</Layout>
      </div>
			
		
    );
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
  height: 90vh;
  width: 70vw;
`

const ImgContainer = styled.div`
  max-width: 800px;
	max-height: 500px;
`

const Controls = styled.div`
  display: flex;
  justify-content: space-between;
`