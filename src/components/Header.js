import styled from 'styled-components'
import React, { useContext } from 'react'
import NavBar from './NavBar'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { useLocation } from 'react-router-dom'
import Hamburger from './Hamburger'
import { RiLinkedinFill, RiInstagramLine } from 'react-icons/ri'
import { GrClose } from 'react-icons/gr'
import { LanguageContext } from '../App'
import FormModal from './FormModal'

const Wrapper = styled(motion.nav)`
	width: 100vw;
	height: 65px;

	display: flex;
	align-items: center;
	position: fixed;
	z-index: 100000;
	transition: 0.2s;
	background: rgba(255, 255, 255, 0.9);

	@media (max-width: 768px) {
		height: 60px;
		position: relative;
		top: 0;
		background: ${({ theme }) => theme.white};
	}
`

const LogoText = styled.div`
	z-index: 100;
	position: absolute;
	margin: 0px 0 0 40px;
`

const StyledUl = styled.ul`
	width: 100%;
	display: flex;
	justify-content: flex-end;
	list-style: none;
	padding: 0px 120px 0 0;
	align-items: center;

	color: ${(props) => props.theme.color};
	@media (max-width: 768px) {
		padding: 10px 0px;
	}
`

const StyledLi = styled.li`
	margin: 10px 10px;
	cursor: pointer;

	a {
		text-decoration: none;
		color: inherit;
	}
	:hover {
		color: #cacaca;
		svg {
			fill: #cacaca;
		}
	}

	@media (max-width: 768px) {
		display: none;
	}
`

const StyledContact = styled(StyledLi)`
	background: ${({ theme }) => theme.primary};
	color: white;
	padding: 10px 15px;
	border-radius: 30px;
`

const MenuBtn = styled(motion.button)`
	background-color: transparent;
	border: none;

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

	@media (max-width: 768px) {
		padding: 10px 0px;
		display: block;
	}
`

const DemoModalBackground = styled.div`
	width: 100%;
	height: 100vh;
	inset: 0;
	display: grid;
	place-items: center;

	z-index: 100000;
	position: absolute;
	background: rgba(255, 255, 255, 0.6);
	overflow: hidden;

	path {
		stroke: black;
	}

	.modal {
		background: ${({ theme }) => theme.primary90};
		position: absolute;
		border-radius: 10px;
		@media (max-width: 400px) {
			width: 90%;
		}

		svg {
			position: absolute;
			top: 1rem;
			z-index: 1000000000;
			right: 1rem;
			cursor: pointer;
			path {
				stroke: white;
			}
		}
	}
`

const StyledLogoSVG = styled.img`
	width: 200px;
`

const Header = ({ setOpenNav, openNav, theme }) => {
	const location = useLocation()

	const { lang, setLang, openModal, setOpenModal } = useContext(LanguageContext)

	return (
		<Wrapper>
			{openModal && (
				<DemoModalBackground>
					<div className="modal">
						<GrClose
							onClick={() => setOpenModal(false)}
							fill="white"
							size={20}
						/>
						<FormModal />
					</div>
				</DemoModalBackground>
			)}
			{openNav && (
				<NavBar openNav={openNav} theme={theme} setOpenNav={setOpenNav} />
			)}
			<LogoText
				onClick={() =>
					window.scrollTo({
						top: 0,
						left: 0,
						behavior: 'smooth',
					})
				}
				location={location}
			>
				<Link to="/">
					<StyledLogoSVG src="https://ik.imagekit.io/lct7da3kd6o/Zittron/Asset_2_8x__1__pk3g5meQC.png?ik-sdk-version=javascript-1.4.3&updatedAt=1643289700172" />
				</Link>
			</LogoText>
			<StyledUl>
				<StyledContact>
					<p onClick={() => setOpenModal((prev) => !prev)}>
						{' '}
						{lang ? 'Boka en Demo' : 'Request a Demo'}
					</p>
				</StyledContact>
				<StyledLi>
					<Link to="/pricing">{lang ? 'Prisplan' : 'Pricing'}</Link>
				</StyledLi>
				<StyledLi>
					<a
						target="_blank"
						rel="noopener noreferrer"
						href="https://www.linkedin.com/company/konceptify/"
					>
						<RiLinkedinFill fill="#292928" size="18" />
					</a>
				</StyledLi>
				<StyledLi>
					<a
						target="_blank"
						rel="noopener noreferrer"
						href="https://www.instagram.com/konceptifyapp/"
					>
						<RiInstagramLine fill="#292928" size="18" />
					</a>
				</StyledLi>
				{lang ? (
					<StyledLi
						onClick={() => {
							setLang(false)
							localStorage.setItem('language', false)
							setOpenNav(false)
						}}
					>
						EN
					</StyledLi>
				) : (
					<StyledLi
						onClick={() => {
							setLang(true)
							localStorage.setItem('language', true)
							setOpenNav(false)
						}}
					>
						SV
					</StyledLi>
				)}
				<StyledContact>
					<a href="https://conceptmanager.zittron.com/">
						{lang ? 'Logga in' : 'Sign in'}
					</a>
				</StyledContact>
				<li>
					<MenuBtn onClick={() => setOpenNav((current) => !current)}>
						<Hamburger openNav={openNav} />
					</MenuBtn>
				</li>
			</StyledUl>
		</Wrapper>
	)
}

export default Header
