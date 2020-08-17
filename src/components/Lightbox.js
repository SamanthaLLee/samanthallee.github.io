import React, { Component, Fragment, Link } from 'react'
import Lightbox from 'react-image-lightbox';
import 'react-image-lightbox/style.css';

import Header from '../components/Header'
import Layout from '../components/layout'

import PropTypes from 'prop-types'
import styled from 'styled-components'
import Img from 'gatsby-image'
import Card from "react-bootstrap/Card"

import { PageLayout, PageTitle, GalleryLink } from "../components"
import { SEO, Utils } from "../utils"

export default class MyLightbox extends Component {
	state = {
		photoIndex: 0,
		isOpen: false,
		key: "",
		keyArray: []
	};
	
	handleClick = (e, index, slug) => {
		e.preventDefault()
		this.setState({ 
			isOpen: !this.state.isOpen, 
			photoIndex: index, 
			key: slug
		})
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

  render() {
		var keyArray = [];
    const { photoIndex, isOpen, key } = this.state;
		const { images } = this.props
		const { alt } = this.props
		
		const { featuredImageMap } = this.props
		const { allPosts } = this.props
	
    return (
      <div>
			<Layout>
			
		 <SEO title="Gallery" />
		 <PageTitle title="Gallery" />
			
				<Gallery fluid className="d-flex flex-wrap pb-5">
					{allPosts.map(({ node }, i) => 
					(keyArray.push(node.fields.slug), console.log(featuredImageMap[node.fields.slug]),
						<div key={node.id}>
						<Card className="img-container image" as={Link} onClick={e => this.handleClick(e, i, node.fields.slug)}>
							<Card.Img as={Img} className="h-100" fluid={featuredImageMap[node.fields.slug]}/>
						</Card>	
						</div>
					))}
				</Gallery>

				{!isOpen && (<Header />)}
			 
			  {isOpen && (
          <Lightbox
						imageLoadErrorMessage="Uh oh! Something went wrong :("
						imageCaption={alt[photoIndex].node.frontmatter.caption}
            mainSrc={featuredImageMap[keyArray[photoIndex]].src}
            nextSrc={this.isEnd(photoIndex, images) ? '' : featuredImageMap[keyArray[photoIndex+1]].src}
            prevSrc={this.isStart(photoIndex, images) ? '' : featuredImageMap[keyArray[photoIndex-1]].src}
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