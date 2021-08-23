import React, { useContext } from 'react'
import styled from 'styled-components'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { RiLinkedinFill, RiInstagramLine } from 'react-icons/ri'
import { LanguageContext } from '../App'

const StyledNav = styled(motion.div)`
	width: 100vw;
	height: 100vh;
	background-color: ${({ theme }) => theme.white};

	z-index: 3;
	padding-left: 100px;
	* {
		color: ${(props) => props.theme.color};
		font-size: 1rem;
	}

	@media (max-width: 768px) {
		padding: 0 30px;
	}
`

const StyledMainList = styled.ul`
	display: flex;
	justify-content: center;
	flex-direction: column;
	list-style: none;
	align-items: flex-start;
	padding: 80px 0 0 0;
	* {
		:hover {
			color: #c1c1c1;
		}
	}

	@media (max-width: 768px) {
		padding: 40px 0 0 0;
	}
`

const StyledLogIn = styled.div`
	margin-bottom: 20px;
	bottom: 0;
	width: 260px;
	border-radius: 30px;
	background: ${({ theme }) => theme.primary70};
	padding: 20px 18px;
	font-size: 0.7rem;
	color: #fff;
	text-decoration: none;
	* {
		margin: 3px 0 5px 5px;
		:hover {
			fill: #c1c1c1;
			color: #c1c1c1;
		}
	}
`

const StyledAnchor = styled.a`
	color: #fff;
	text-decoration: none;
	font-weight: 700;
	margin-left: 22px;

	:hover {
		color: #c1c1c1;
	}
`

const StyledSubList = styled.ul`
	list-style: none;
	margin: 20px;

	li {
		padding: 10px 25px;
		border-radius: 20px;
	}
	li:first-child {
		margin: 10px 0 0 0;
		font-size: 1.5rem;
	}
	a {
		text-decoration: none;
	}
	a:visited {
		text-decoration: none;
	}
`

const StyledIconsContainer = styled.div`
	display: flex;
	flex-direction: column;
`

const variants = {
	hidden: {
		x: '1000px',
	},
	visible: {
		x: 0,
	},
	transition: {
		duration: 1,
	},
}

const StyledLangList = styled.ul`
	list-style: none;
	display: flex;
	padding-left: 50px;

	li {
		padding-right: 15px;
		margin-bottom: 30px;
		cursor: pointer;
		margin-top: 40px;
	}
`

const NavBar = ({ setOpenNav, openNav }) => {
	const { lang, setLang } = useContext(LanguageContext)

	return (
		<StyledNav
			initial='hidden'
			animate='visible'
			transition='transition'
			variants={variants}
		>
			<StyledMainList>
				<StyledSubList>
					<Link to='/' onClick={() => setOpenNav(false)}>
						<li>{lang ? 'HEM' : 'HOME'}</li>
					</Link>
				</StyledSubList>

				<StyledSubList>
					<Link to='/pricing' onClick={() => setOpenNav(false)}>
						<li>{lang ? 'PRIS' : 'PRICING'}</li>
					</Link>
				</StyledSubList>

				<StyledSubList>
					<Link to='/contact' onClick={() => setOpenNav(false)}>
						<li>{lang ? 'KONTAKT' : 'CONTACT'}</li>
					</Link>
				</StyledSubList>
				<StyledLangList>
					<li
						onClick={() => {
							setLang(false)
							localStorage.setItem('language', false)
							setOpenNav(false)
						}}
					>
						EN
					</li>

					<li
						onClick={() => {
							setLang(true)
							localStorage.setItem('language', true)
							setOpenNav(false)
						}}
					>
						SV
					</li>
				</StyledLangList>
			</StyledMainList>

			<StyledLogIn>
				<StyledIconsContainer>
					<a
						target='_blank'
						rel='noopener noreferrer'
						href='https://www.linkedin.com/company/zittron'
					>
						<div>
							<RiLinkedinFill fill='white' size='40' />
						</div>
					</a>

					<a
						target='_blank'
						rel='noopener noreferrer'
						href='https://www.instagram.com/zittron/'
					>
						<div>
							<RiInstagramLine fill='white' size='40' />
						</div>
					</a>
				</StyledIconsContainer>
				<StyledAnchor href='https://primemanager.zittron.com/'>
					PRIME MANAGER LOG IN
				</StyledAnchor>
			</StyledLogIn>
		</StyledNav>
	)
}

export default NavBar
