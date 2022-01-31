import React, { useContext, useState, useEffect } from 'react'
import styled from 'styled-components'

import { LanguageContext } from '../App'
import { motion, AnimatePresence } from 'framer-motion'
import { getRandom } from '../utils/utils'
import { clients } from '../utils/clientsData'

const Wrapper = styled.section`
	display: flex;
	flex-direction: column;
	align-items: center;
	padding: 2rem 10rem;
	background-color: #f7f7f7;
	margin-bottom: 5rem;
	@media (max-width: 900px) {
		padding: 1rem;
	}
`

const ClientContainer = styled.div`
	min-height: 200px;
	width: 100%;
	display: grid;
	grid-auto-rows: 200px;
	grid-template-columns: repeat(3, 1fr);
	place-items: center;
	gap: 1rem;
	background-color: #fcfcfc;
	border-radius: 1rem;
	margin-top: 1rem;
	padding: 1rem;
	@media (max-width: 900px) {
		padding: 0;
		gap: 0.5rem;
		min-height: auto;
	}
`

const StyledImg = styled.img`
	max-width: 150px;
	@media (max-width: 900px) {
		max-width: 70px;
	}
`

const StyledH2 = styled.h2`
	font-size: 1.5rem;
	color: #292928;
`

const StyledAnchor = styled(motion.a)`
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
	const [clientsArr, setClientsArr] = useState(getRandom(clients, 3))

	useEffect(() => {
		const interval = setInterval(() => {
			setClientsArr(getRandom(clients, 3))
		}, 6000)

		return () => clearInterval(interval)
		// eslint-disable-next-line
	}, [])

	const variants = {
		visible: {
			opacity: 1,
			transition: {
				// duration: 1
			},
		},
		hidden: {
			opacity: 0,
			transition: {
				// duration: 0
			},
		},
	}

	return (
		<Wrapper>
			<StyledH2>{lang ? 'Våra kunder' : 'Trusted by'}</StyledH2>
			<ClientContainer>
				<AnimatePresence initial={false} exitBeforeEnter>
					{clientsArr.map((client, index) => {
						return (
							<StyledAnchor
								initial="hidden"
								animate={'visible'}
								exit="hidden"
								variants={variants}
								key={index}
								href={client.link || 'https://konceptify.com/'}
								target="_blank"
							>
								<StyledImg src={client.photo} alt={client.name} />
							</StyledAnchor>
						)
					})}
				</AnimatePresence>
			</ClientContainer>
		</Wrapper>
	)
}

export default Testimonials
