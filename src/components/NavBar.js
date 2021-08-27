import React, { useContext } from 'react'
import styled from 'styled-components'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { RiLinkedinFill, RiInstagramLine } from 'react-icons/ri'
import { LanguageContext } from '../App'

const StyledNav = styled(motion.div)`
	width: 100vw;
	height: 90vh;
	background-color: ${({ theme }) => theme.white};
	display: flex;
	flex-direction: column;
	justify-content: space-between;
	z-index: 3;
	position: relative;
	padding: 120px 30px 0 30px;

	@media (min-width: 768px) {
		display: none;
	}
`
const IconUl = styled.ul`
	position: absolute;
	bottom: 30%;
	left: 40px;
	list-style: none;
	li {
		margin: 15px;
	}
`
const StyledUl = styled.ul`
	list-style: none;
	margin: 0px;

	li {
		padding: 15px 25px;
		display: flex;
		align-items: center;
		font-size: 1.2rem;
	}

	a {
		text-decoration: none;
		color: inherit;
	}
	a:visited {
		text-decoration: none;
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

const NavBar = ({ setOpenNav, openNav }) => {
	const { lang, setLang } = useContext(LanguageContext)

	return (
		<StyledNav
			initial='hidden'
			animate='visible'
			transition='transition'
			variants={variants}
		>
			<StyledUl>
				<li>
					<Link to='/' onClick={() => setOpenNav(false)}>
						{lang ? 'HEM' : 'HOME'}
					</Link>
				</li>

				<li>
					<Link to='/pricing' onClick={() => setOpenNav(false)}>
						{lang ? 'PRIS' : 'PRICING'}
					</Link>
				</li>

				<li>
					<Link to='/contact' onClick={() => setOpenNav(false)}>
						{lang ? 'KONTAKT' : 'CONTACT'}
					</Link>
				</li>

				{lang ? (
					<li
						onClick={() => {
							setLang(false)
							localStorage.setItem('language', false)
							setOpenNav(false)
						}}
					>
						<img
							src='https://www.countryflags.io/gb/flat/16.png'
							alt='English flag'
						/>{' '}
						EN
					</li>
				) : (
					<li
						onClick={() => {
							setLang(true)
							localStorage.setItem('language', true)
							setOpenNav(false)
						}}
					>
						<img
							src='https://www.countryflags.io/se/flat/16.png'
							alt='Swedish flag'
						/>{' '}
						SV
					</li>
				)}
			</StyledUl>
			<IconUl>
				<li className='icon'>
					<a
						target='_blank'
						rel='noopener noreferrer'
						href='https://www.linkedin.com/company/zittron'
					>
						<RiLinkedinFill fill='#292928' size='40' />
					</a>
				</li>
				<li className='icon'>
					<a
						target='_blank'
						rel='noopener noreferrer'
						href='https://www.instagram.com/zittron/'
					>
						<RiInstagramLine fill='#292928' size='40' />
					</a>
				</li>
			</IconUl>
		</StyledNav>
	)
}

export default NavBar
