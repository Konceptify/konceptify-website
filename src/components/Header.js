import styled from 'styled-components'
import React, { useEffect, useState } from 'react'
import NavBar from './NavBar'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { useLocation } from 'react-router-dom'
import Hamburger from './Hamburger'

const Wrapper = styled.header`
	width: 100%;
	height: 60px;
	position: fixed;
	z-index: 1000;
	opacity: ${({ scroll }) => (scroll ? 0 : 1)};
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

	a {
		text-decoration: none;
		z-index: 100;
		position: absolute;
		color: ${(props) => props.theme.color};

		@media (max-width: 768px) {
			color: #000;
			font-size: 1rem;
			letter-spacing: 0.4rem;
			padding: 15px 15px;

			position: relative;
			top: 0;

			left: 0;
			z-index: 100;
		}
	}
`

const StyledUl = styled.ul`
	display: flex;
	justify-content: space-between;
	list-style: none;
	padding: 10px 120px;
	align-items: center;
	color: ${(props) => props.theme.color};
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

	@media (max-width: 768px) {
		padding: 10px 0px;
	}
`

const Header = ({ setOpenNav, openNav, theme }) => {
	const location = useLocation()
	const [scroll, setScroll] = useState(false)

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
	}, [])

	return (
		<Wrapper scroll={scroll}>
			{openNav && (
				<NavBar
					openNav={openNav}
					theme={theme}
					setOpenNav={setOpenNav}
				/>
			)}
			<StyledUl>
				<li>
					<LogoText scroll={scroll} location={location}>
						<Link to='/'>ZITTRON</Link>
					</LogoText>
				</li>
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
