import React from 'react'
import styled from 'styled-components'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { RiLinkedinFill, RiInstagramLine } from 'react-icons/ri'

const StyledNav = styled(motion.nav)`
	width: 100%;
	height: 100vh;
	background-color: ${({ theme }) => theme.white};
	position: relative;
	z-index: 3;
	* {
		color: ${(props) => props.theme.color};
		font-size: 1rem;
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
	padding: 80px 0 0 0;
`

const StyledSubList = styled.ul`
	list-style: none;

	li:first-child {
		margin: 20px 0 0 0;
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
	position: fixed;
	bottom: 60px;
	right: 60px;
	display: flex;
	flex-direction: column;
	* {
		margin-top: 10px;
	}
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

const NavBar = ({ setOpenNav, openNav }) => {
	return (
		<StyledNav
			initial='hidden'
			animate='visible'
			transition='transition'
			variants={variants}
		>
			<StyledMainList onClick={() => setOpenNav(false)}>
				<StyledSubList>
					<li>ZML</li>
					<li>ZITTRON MICRO LEARNING</li>
				</StyledSubList>
				<StyledSubList>
					<Link to='/pricing'>
						<li>PRICING</li>
					</Link>
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
					<Link to='/contact'>
						<li>C0NTACT</li>
					</Link>
				</StyledSubList>
			</StyledMainList>
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
						<RiLinkedinFill size='40' />
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
						<RiInstagramLine size='40' />
					</motion.div>
				</a>
			</StyledIconsContainer>
		</StyledNav>
	)
}

export default NavBar
