import React, { useContext } from 'react'
import styled from 'styled-components'
import pinchos from '../img/pinchos.jpeg'
import mjukmjuk from '../img/mjukmjuk.jpeg'
import bores from '../img/bores.jpeg'
import gps from '../img/gps.jpeg'
import { LanguageContext } from '../App'

const Wrapper = styled.section`
	display: flex;
	flex-direction: column;
	align-items: center;
	padding: 2rem 10rem;
	background-color: #f7f7f7;
	margin-bottom: 5rem;
`

const ClientContainer = styled.div`
	min-height: 200px;
	width: 100%;
	display: grid;
	grid-auto-rows: 200px;
	grid-template-columns: repeat(4, 1fr);
	place-items: center;
	gap: 1rem;
	background-color: #fcfcfc;
	border-radius: 1rem;
	margin-top: 1rem;

	padding: 1rem;
`

const StyledImg = styled.img`
	max-width: 150px;
`

const StyledH2 = styled.h2`
	font-size: 1.5rem;
	color: #292928;
`

const StyledAnchor = styled.a`
	display: flex;
	gap: 1rem;
	flex-direction: column;
	align-items: center;
	text-decoration: none;
	color: #292928;
	font-size: 0.7rem;
`

const Testimonials = () => {
	const { lang } = useContext(LanguageContext)

	const clients = [
		{ name: 'MjukMjuk', photo: mjukmjuk, link: 'https://mjukmjuk.se/' },
		{ name: 'Bores', photo: bores, link: 'https://bores.se/' },
		{
			name: 'Guilty Pleasure',
			photo: gps,
			link: 'https://www.guiltypleasure.se/',
		},
		{ name: 'Pinchos', photo: pinchos, link: 'https://www.pinchos.se/' },
	]

	return (
		<Wrapper>
			<StyledH2>{lang ? 'Våra kunder' : 'Trusted by'}</StyledH2>
			<ClientContainer>
				{clients.map((client) => {
					return (
						<StyledAnchor
							href={client.link || 'https://konceptify.com/'}
							target="_blank"
						>
							<StyledImg src={client.photo} alt={client.name} />
						</StyledAnchor>
					)
				})}
			</ClientContainer>
		</Wrapper>
	)
}

export default Testimonials
