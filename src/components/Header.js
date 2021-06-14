import styled from 'styled-components'
import React from 'react'
import NavBar from './NavBar'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { useLocation } from 'react-router-dom'

const Wrapper = styled.header`
	width: 100%;
	height: 100px;
	position: absolute;
	z-index: 1000;
`

const LogoText = styled.p`
	font-weight: 700;
	font-size: 2rem;
	letter-spacing: 0.6rem;
	a {
		text-decoration: none;

		color: ${(props) =>
			props.location.pathname === '/contact'
				? '#fff'
				: props.theme.color};

		@media (max-width: 768px) {
			color: #000;
			font-size: 1rem;
		}
	}
`

const StyledUl = styled.ul`
	display: flex;
	justify-content: space-between;
	list-style: none;
	padding: 10px 20px;
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
	right: 0;
	top: 0;
	z-index: 100;
	padding: 20px 30px;
	font-size: 3rem;
	font-weight: 100;

	@media (max-width: 768px) {
		padding: 10px 10px;
	}
`

const variants = {
	hidden: {
		rotate: '0deg',
	},
	animate: {
		rotate: '225deg',
	},
	transition: {
		duration: 0.5,
	},
}

const Header = ({ setOpenNav, openNav, theme }) => {
	const location = useLocation()

	return (
		<Wrapper>
			{openNav && <NavBar theme={theme} setOpenNav={setOpenNav} />}
			<StyledUl>
				<li>
					<LogoText location={location}>
						<Link to='/'>ZITTRON</Link>
					</LogoText>
				</li>
				<li>
					<MenuBtn
						onClick={() => setOpenNav((current) => !current)}
						initial='hidden'
						animate={openNav ? 'animate' : 'hidden'}
						variants={variants}
						transition={{ duration: 0.5 }}
					>
						+
					</MenuBtn>
				</li>
			</StyledUl>
		</Wrapper>
	)
}

export default Header
