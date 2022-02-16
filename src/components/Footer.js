import React, { useContext } from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { RiLinkedinFill, RiInstagramLine } from 'react-icons/ri'
import { LanguageContext } from '../App'

const Wrapper = styled.footer`
	width: 100vw;
	min-height: 550px;
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

const HeaderLi = styled.li`
	font-weight: 700;
`

const StyledMainUL = styled(StyledUL)`
	display: flex;
	justify-content: space-between;
	width: 100%;
`

const StyledIconsContainer = styled.div`
	position: absolute;
	bottom: 120px;
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
		font-size: 1rem;
	}

	a {
		text-decoration: none;
		color: #000;
	}
`

const Copyright = styled(LinkLi)`
	font-size: 0.7rem;
	position: absolute;
	bottom: 40px;
`

const StyledLi = styled.li`
	font-size: 0.7rem;
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

const Footer = () => {
	const { lang, handleFooterClick } = useContext(LanguageContext)

	let date = new Date()
	let year = date.getFullYear()

	return (
		<Wrapper>
			<StyledMainUL>
				<StyledUL>
					<HeaderLi>{lang ? 'Koncept' : 'Concept'}</HeaderLi>
					<LinkLi onClick={() => handleFooterClick('Compliance')}>
						{lang ? 'Drift' : 'Operations'}
					</LinkLi>
					<LinkLi onClick={() => handleFooterClick('Comunicate')}>
						{lang ? 'Kommunikation' : 'Communications'}
					</LinkLi>
					<LinkLi onClick={() => handleFooterClick('Academy')}>
						{lang ? 'Utbildning' : 'Academy'}
					</LinkLi>
					<li>
						<hr />
					</li>
					<LinkLi>
						<Link to="/contact" onClick={() => window.scrollTo(0, 0)}>
							{lang ? 'Kontakta Konceptify' : 'Contact Konceptify'}
						</Link>
					</LinkLi>
					<LinkLi>
						<Link to="/pricing" onClick={() => window.scrollTo(0, 0)}>
							{lang ? 'Prisplan' : 'Pricing'}
						</Link>
					</LinkLi>
					<LinkLi>
						<a href="https://conceptmanager.zittron.com/">
							{lang ? 'Logga in' : 'Sign in'}
						</a>
					</LinkLi>
					<Copyright>© Copyright Konceptify {year}</Copyright>
					<StyledLi>Org. num: 559239-2368</StyledLi>
				</StyledUL>
				<StyledUL>
					<li>
						<Link to="/privacy">Privacy Policy</Link>
					</li>
					<li>
						<Link to="/cookies">Cookies</Link>
					</li>
				</StyledUL>
			</StyledMainUL>
			<StyledIconsContainer>
				<a
					target="_blank"
					rel="noopener noreferrer"
					href="https://www.linkedin.com/company/konceptify/"
				>
					<motion.div
						initial="hidden"
						whileTap="visible"
						whileHover="visible"
						transition="transition"
						variants={variantsIcon}
					>
						<RiLinkedinFill size="40" color="#000" />
					</motion.div>
				</a>

				<a
					target="_blank"
					rel="noopener noreferrer"
					href="https://www.instagram.com/konceptifyapp/"
				>
					<motion.div
						initial="hidden"
						whileTap="visible"
						whileHover="visible"
						transition="transition"
						variants={variantsIcon}
					>
						<RiInstagramLine size="40" color="#000" />
					</motion.div>
				</a>
			</StyledIconsContainer>
		</Wrapper>
	)
}

export default Footer
