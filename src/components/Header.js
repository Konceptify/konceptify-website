import styled from 'styled-components'
import React, { useEffect, useState, useContext } from 'react'
import NavBar from './NavBar'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { useLocation } from 'react-router-dom'
import Hamburger from './Hamburger'
import { ReactComponent as LogoSVG } from '../img/Resurs 5.svg'
import { RiLinkedinFill, RiInstagramLine } from 'react-icons/ri'
import { LanguageContext } from '../App'

const Wrapper = styled.nav`
	width: 100vw;
	height: 60px;
	position: fixed;
	z-index: 1000;
	opacity: ${({ scroll }) => (scroll ? 0 : 1)};
	display: ${({ scroll }) => (scroll ? 'none' : 'block')};
	transition: 0.2s;
	background: ${({ scroll }) => (scroll ? '#fff' : 'transparent')};

	@media (max-width: 768px) {
		height: 60px;
		background: ${({ theme }) => theme.white};
	}
`

const LogoText = styled.p`
	font-weight: 700;
	font-size: 2rem;
	letter-spacing: 0.6rem;
	padding: 5px 10px;
	z-index: 100;
	position: absolute;
	margin: 10px 0 0 40px;

	a {
		text-decoration: none;
		z-index: 100;
		position: absolute;
		color: ${(props) => props.theme.color};

		@media (max-width: 768px) {
			color: #000;
			font-size: 1rem;
			letter-spacing: 0.4rem;
			padding: 15px 0px;
			margin: 0;
			position: relative;
			top: 0;

			left: 0;
			z-index: 100;
		}
	}
`

const StyledUl = styled.ul`
	width: 100%;
	display: flex;
	justify-content: flex-end;
	list-style: none;
	padding: 10px 120px;
	align-items: center;
	color: ${(props) => props.theme.color};
	@media (max-width: 768px) {
		padding: 10px 0px;
	}
`

const StyledLi = styled.li`
	margin: 10px 10px;
	cursor: pointer;
	:hover {
		color: #cacaca;
		svg {
			fill: #cacaca;
		}
	}

	@media (max-width: 1068px) {
		display: none;
	}
`

const StyledContact = styled(StyledLi)`
	background: ${({ theme }) => theme.primary};
	color: white;
	padding: 10px;
	border-radius: 5px;
`

const MenuBtn = styled(motion.button)`
	background-color: transparent;
	border: none;
	letter-spacing: 0.2rem;
	color: ${(props) => props.theme.color};
	cursor: pointer;
	position: absolute;
	right: -30px;
	top: 0;
	z-index: 100;
	padding: 10px 30px;
	font-size: 1rem;
	font-weight: 100;
	display: none;

	@media (max-width: 1068px) {
		padding: 10px 0px;
		display: block;
	}
`

const StyledLogoSVG = styled(LogoSVG)`
	width: 135px;
`

const Header = ({ setOpenNav, openNav, theme }) => {
	const location = useLocation()
	const [scroll, setScroll] = useState(false)
	const { setLang } = useContext(LanguageContext)

	const changeBackground = () => {
		if (window.scrollY >= 26) {
			setScroll(true)
		} else {
			setScroll(false)
		}
	}

	useEffect(() => {
		changeBackground()
		window.addEventListener('scroll', changeBackground)
	})

	return (
		<Wrapper scroll={scroll}>
			{openNav && (
				<NavBar
					openNav={openNav}
					theme={theme}
					setOpenNav={setOpenNav}
				/>
			)}
			<LogoText scroll={scroll} location={location}>
				<Link to='/'>
					<StyledLogoSVG />
				</Link>
			</LogoText>
			<StyledUl>
				<StyledContact>Contact</StyledContact>
				<StyledLi>Pricing</StyledLi>
				<StyledLi>
					<a
						target='_blank'
						rel='noopener noreferrer'
						href='https://www.linkedin.com/company/zittron'
					>
						<RiLinkedinFill fill='black' size='10' />
					</a>
				</StyledLi>
				<StyledLi>
					<a
						target='_blank'
						rel='noopener noreferrer'
						href='https://www.instagram.com/zittron/'
					>
						<RiInstagramLine fill='black' size='10' />
					</a>
				</StyledLi>
				<StyledLi
					onClick={() => {
						setLang(false)
						localStorage.setItem('language', false)
						setOpenNav(false)
					}}
				>
					EN
				</StyledLi>

				<StyledLi
					onClick={() => {
						setLang(true)
						localStorage.setItem('language', true)
						setOpenNav(false)
					}}
				>
					SV
				</StyledLi>
				<li>
					<MenuBtn
						onClick={() => setOpenNav((current) => !current)}
					>
						<Hamburger openNav={openNav} />
					</MenuBtn>
				</li>
			</StyledUl>
		</Wrapper>
	)
}

export default Header
