import React from "react"
import { PageLayout, PageTitle } from "../components"
import { Container } from "react-bootstrap"
import ReactTooltip from 'react-tooltip'


export default ({ data }) => {
	const {
		resources
	} = data.site.siteMetadata

	const ResourceLink = ({ title, category, link }) => (
		<div><a href={link} data-tip data-for={category} class="carrdLink">
			<div class="carrd">{title}</div>
		</a>
			<ReactTooltip offset="{'bottom': 10, 'right': 10}" arrowColor="transparent" place='right' data-place='right' className='tooltip' id={category} aria-haspopup='true' >
				<p className='tooltip-text'>{category}</p>
			</ReactTooltip>
		</div>

	)

	const resourcesList = resources.map(h => ResourceLink(h))


	return (
		<PageLayout>
			<PageTitle title="Resources" />
			<Container class="mx-auto px-2">

				{resourcesList}

			</Container>
		</PageLayout>
	)
}

export const query = graphql`
  query {
    site {
      siteMetadata {
		resources {
          title
          category
          link
        }
      }
    }
  }
`