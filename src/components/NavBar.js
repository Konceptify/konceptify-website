import React from 'react'
import styled from 'styled-components'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'

const StyledNav = styled(motion.nav)`
	width: 100%;
	height: 100vh;
	background-color: ${({ theme }) => theme.backgroundColor};
	position: relative;
	z-index: 3;
	* {
		color: ${(props) => props.theme.color};
	}

	@media (max-width: 768px) {
		padding: 0 30px;
		ul {
			flex-direction: column;
		}
	}
`

const StyledMainList = styled.ul`
	display: flex;
	justify-content: space-around;
	list-style: none;
	align-items: flex-start;
	padding: 50px 0 0 0;
`

const StyledSubList = styled.ul`
	list-style: none;

	li:first-child {
		margin: 20px 0;
		font-size: 2rem;
	}
	a {
		text-decoration: none;
	}
	a:visited {
		text-decoration: none;
	}
`

/* const CloseBtn = styled.button`
	display: inline;
	background-color: transparent;
	border: none;
	display: inline-block;
	position: absolute;
	right: 0;
	top: 0;
	padding: 30px 40px;
	font-size: 4rem;
` */

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

const NavBar = ({ setOpenNav }) => {
	return (
		<StyledNav
			initial='hidden'
			animate='visible'
			transition='transition'
			variants={variants}
		>
			<StyledMainList onClick={() => setOpenNav(false)}>
				<StyledSubList>
					<li>
						<Link to='/'>HOME</Link>
					</li>
				</StyledSubList>
				<StyledSubList>
					<li>ZML</li>
					<li>ZITTRON MICRO LEARNING</li>
				</StyledSubList>
				<StyledSubList>
					<li>
						<Link to='/pricing'>PRICING</Link>
					</li>
				</StyledSubList>
				<StyledSubList>
					<li>COMPANY</li>
					<li>TEAM</li>
					<li>STORY</li>
				</StyledSubList>
				<StyledSubList>
					<li>NEWS</li>
					<li>NEWSLETTER</li>
					<li>LATEST</li>
				</StyledSubList>
				<StyledSubList>
					<li>
						<Link to='/contact'>C0NTACT</Link>
					</li>
					<li>
						<a
							target='_blank'
							rel='noopener noreferrer'
							href='https://www.linkedin.com/company/zittron'
						>
							LINKEDIN
						</a>
					</li>
					<li>
						<a
							target='_blank'
							rel='noopener noreferrer'
							href='https://www.instagram.com/zittron/'
						>
							INSTAGRAM
						</a>
					</li>
					<li>
						<Link to='/contact'>C0NTACT US</Link>
					</li>
				</StyledSubList>
			</StyledMainList>
		</StyledNav>
	)
}

export default NavBar
