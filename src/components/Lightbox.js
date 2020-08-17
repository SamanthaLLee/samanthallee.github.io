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
		key: "/gallery/techtogether-demo/"
	};
	
	goBack = () => {
    
  }

  goForward = () => {
    this.setState({ selectedImage: this.state.selectedImage + 1 })
  }
	
	handleClick = (e, index, slug) => {
		e.preventDefault()
		this.setState({ isOpen: !this.state.isOpen, photoIndex: index, key: slug })
		console.log(e)
		console.log(index)
		console.log(slug)
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
	
	// <GalleryLink
	// 	as={Link} 
	// 
	// 	onClick={e => this.handleClick(e, i)}
	// 	featuredImage={featuredImageMap[node.fields.slug]}
	// 	title={node.frontmatter.title}
	// 	date={node.frontmatter.date}
	// 	tags={node.frontmatter.tags}
	// 	excerpt={node.excerpt}
	// 	description={node.frontmatter.description}
	// />
	
	//images[photoIndex].node.childImageSharp.fluid.src
	
	// {images.map((img, i) => ( 
	// 	console.log(img),
	// 	<Card className="text-center img-container image" as={Link} to={img.node.childImageSharp.fluid.src} onClick={e => this.handleClick(e, i)}>
	// 		<Card.Img as={Img} fluid={img.node.childImageSharp.fluid.src ? img.node.childImageSharp.fluid.src : ""} className="h-100"/>
	// 	</Card>	
	// ))}
	//{() => this.setState({ isOpen: true })}

  render() {
    const { photoIndex, isOpen, key } = this.state;
		const { images } = this.props
		const { alt } = this.props
		
		const { featuredImageMap } = this.props
		const { allPosts } = this.props
		const customStyles = {
		  content : {
		    zindex: 100000
		  }
		};
		
		console.log("featuredImageMap")
		console.log(key)
		console.log(featuredImageMap[key])
    return (
      <div>
			<Layout>
			
		 <SEO title="Gallery" />
		 <PageTitle title="Gallery" />
			
				<Gallery fluid className="d-flex flex-wrap">
					{allPosts.map(({ node }, i) => 
					(
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
						className="lightbox-z-index"
						reactModalStyle={customStyles}
						imageLoadErrorMessage="Uh oh! Something went wrong :("
						imageCaption={alt[photoIndex].node.frontmatter.caption}
            mainSrc={featuredImageMap[key].src}
            nextSrc={this.isEnd(photoIndex, images) ? '' : images[(photoIndex + 1) % images.length].node.childImageSharp.fluid.src}
            prevSrc={this.isStart(photoIndex, images) ? '' : images[(photoIndex + images.length - 1) % images.length].node.childImageSharp.fluid.src}
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