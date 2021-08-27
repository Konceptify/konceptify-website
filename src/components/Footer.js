import React, { useContext } from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { RiLinkedinFill, RiInstagramLine } from 'react-icons/ri'
import { LanguageContext } from '../App'

const Wrapper = styled.footer`
	width: 100vw;
	height: 500px;
	bottom: 0%;
	display: flex;

	align-items: center;
	z-index: 1;
`

const StyledUL = styled.ul`
	list-style: none;

	li {
		margin: 20px 70px;
		@media (max-width: 768px) {
			margin: 20px 20px;
		}
		a {
			color: #000;
			text-decoration: none;
		}
	}
`

const StyledMainUL = styled(StyledUL)`
	display: flex;
	justify-content: space-between;
	width: 100%;
`

const StyledIconsContainer = styled.div`
	position: absolute;
	bottom: 60px;
	right: 60px;
	display: flex;
	flex-direction: column;
	* {
		margin-top: 10px;
	}
`

const LinkLi = styled.li`
	cursor: pointer;
	font-size: 1.2rem;
	@media (max-width: 768px) {
		font-size: 1.5rem;
	}

	a {
		text-decoration: none;
		color: #000;
	}
`

const variantsIcon = {
	hidden: {
		scale: 1,
	},
	visible: {
		scale: [1, 1.2, 1],
	},
	transition: {
		duration: 0.5,
	},
}

const Footer = ({ setConceptSlide, sliderRef }) => {
	const { lang, handleFooterClick } = useContext(LanguageContext)

	return (
		<Wrapper>
			<StyledMainUL>
				<StyledUL>
					<li>{lang ? 'Koncept' : 'Concept'}</li>
					<LinkLi
						onClick={() => handleFooterClick('Compliance')}
					>
						{lang ? 'Checklistor' : 'Compliance'}
					</LinkLi>
					<LinkLi
						onClick={() => handleFooterClick('Comunicate')}
					>
						{lang ? 'Kommunikation' : 'Comunicate'}
					</LinkLi>
					<LinkLi onClick={() => handleFooterClick('Education')}>
						{lang ? 'Utbildning' : 'Education'}
					</LinkLi>
					<li>
						<hr />
					</li>
					<LinkLi>
						<Link
							to='/contact'
							onClick={() => window.scrollTo(0, 0)}
						>
							{lang
								? 'Kontakta Zittron'
								: 'Contact Zittron'}
						</Link>
					</LinkLi>
					<LinkLi>
						<Link
							to='/pricing'
							onClick={() => window.scrollTo(0, 0)}
						>
							{lang ? 'Prisplan' : 'Pricing'}
						</Link>
					</LinkLi>
				</StyledUL>
				<StyledUL>
					<li>
						<Link to='/privacy'>Privacy Policy</Link>
					</li>
				</StyledUL>
			</StyledMainUL>
			<StyledIconsContainer>
				<a
					target='_blank'
					rel='noopener noreferrer'
					href='https://www.linkedin.com/company/zittron'
				>
					<motion.div
						initial='hidden'
						whileTap='visible'
						whileHover='visible'
						transition='transition'
						variants={variantsIcon}
					>
						<RiLinkedinFill size='40' color='#000' />
					</motion.div>
				</a>

				<a
					target='_blank'
					rel='noopener noreferrer'
					href='https://www.instagram.com/zittron/'
				>
					<motion.div
						initial='hidden'
						whileTap='visible'
						whileHover='visible'
						transition='transition'
						variants={variantsIcon}
					>
						<RiInstagramLine size='40' color='#000' />
					</motion.div>
				</a>
			</StyledIconsContainer>
		</Wrapper>
	)
}

export default Footer
