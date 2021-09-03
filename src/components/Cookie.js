import React, { useContext } from 'react'
import styled from 'styled-components'
import { useCookieConsent } from 'use-cookie-consent'
import { LanguageContext } from '../App'
import { Link } from 'react-router-dom'

const CenterContainer = styled.div`
	width: 100vw;
	position: fixed;
	height: 100vh;
	display: flex;

	z-index: 200000;
	background: rgba(255, 255, 255, 0.5);

	@media (max-width: 768px) {
		height: 100vh;
	}
`

const Wrapper = styled.aside`
	width: 300px;
	height: 340px;
	background: ${({ theme }) => theme.white};
	border-radius: 20px;
	padding: 20px;
	display: flex;
	position: absolute;
	bottom: 4vh;
	left: 40px;
	flex-direction: column;
	align-items: center;
	justify-content: space-between;
	border: 1px solid ${({ theme }) => theme.primary90};
	* {
		color: ${({ theme }) => theme.color};
		text-align: center;
	}

	@media (max-width: 968px) {
		width: 90vw;
		position: fixed;
		bottom: 2vh;
		left: 5%;
	}
`

const ButtonDiv = styled.div`
	display: flex;
	justify-content: space-evenly;
	align-items: center;
	height: 50%;
	width: 100%;

	a {
		width: 50%;
		position: absolute;
		bottom: 0;
		right: 0;
		height: 50px;
		display: flex;
		justify-content: center;
		align-items: center;
		border-radius: 0 0 20px 0;
		color: ${({ theme }) => theme.color};
		font-size: 0.8rem;
		text-decoration: none;
		border-top: 1px solid ${({ theme }) => theme.primary80};
	}
`

const StyledButton = styled.button`
	border: none;
	background: ${({ theme }) => theme.primary80};
	color: ${({ theme }) => theme.white};
	padding: 10px 25px;
	border-radius: 0 0 0 20px;
	width: 50%;
	position: absolute;
	display: inline;
	bottom: 0;
	left: 0;
	height: 50px;
	cursor: pointer;
	text-transform: uppercase;
	font-size: 0.8rem;
	transition: all 0.3s linear;

	:hover {
		background-color: ${({ theme }) => theme.primary90};
	}
`

const Styledh2 = styled.h2`
	font-size: 2rem;
	color: ${({ theme }) => theme.color};
	margin-top: 10px;
`

const StyledH3 = styled.h4`
	padding: 10px;
`

export const Cookie = () => {
	const { openCookie, setOpenCookie } = useContext(LanguageContext)

	const { acceptAllCookies } = useCookieConsent()

	function handleAcceptClick() {
		acceptAllCookies()
		setOpenCookie(false)
	}

	return (
		<>
			{openCookie && (
				<CenterContainer>
					<Wrapper>
						<svg
							width='250'
							height='250'
							viewBox='0 0 250 250'
							fill='none'
							xmlns='http://www.w3.org/2000/svg'
						>
							<g clip-path='url(#clip0)'>
								<path
									d='M249.278 124.91C215.113 124.495 187.525 96.7409 187.525 62.4782C153.263 62.4782 125.514 34.8952 125.094 0.735016C111.783 -1.28647 98.1747 0.881501 86.1679 6.99478L52.413 24.192C40.2617 30.3846 30.3836 40.2661 24.1952 52.4196L7.05657 86.0524C0.849809 98.2367 -1.34141 112.073 0.796807 125.579L6.69524 162.82C8.83134 176.313 15.1828 188.783 24.8398 198.445L51.5829 225.183C61.2094 234.813 73.6376 241.147 87.0859 243.279L124.542 249.212C137.975 251.34 151.739 249.158 163.863 242.981L197.618 225.789C209.768 219.595 219.646 209.714 225.836 197.561L242.975 163.928C249.107 151.897 251.28 138.255 249.278 124.91V124.91ZM85.9384 179.685C77.3105 179.685 70.3134 172.688 70.3134 164.06C70.3134 155.432 77.3105 148.435 85.9384 148.435C94.5663 148.435 101.563 155.432 101.563 164.06C101.563 172.688 94.5663 179.685 85.9384 179.685ZM101.563 101.56C92.9355 101.56 85.9384 94.5631 85.9384 85.9352C85.9384 77.3073 92.9355 70.3102 101.563 70.3102C110.191 70.3102 117.188 77.3073 117.188 85.9352C117.188 94.5631 110.191 101.56 101.563 101.56ZM179.688 164.06C171.06 164.06 164.063 157.063 164.063 148.435C164.063 139.807 171.06 132.81 179.688 132.81C188.316 132.81 195.313 139.807 195.313 148.435C195.313 157.063 188.316 164.06 179.688 164.06Z'
									fill='#3f4f45'
								/>
							</g>
							<defs>
								<clipPath id='clip0'>
									<rect
										width='250'
										height='250'
										fill='white'
									/>
								</clipPath>
							</defs>
						</svg>

						<Styledh2>Cookies?</Styledh2>
						<StyledH3>
							We use cookies to make your user experience
							on this website better.
						</StyledH3>

						<ButtonDiv>
							<StyledButton onClick={handleAcceptClick}>
								Accept all
							</StyledButton>
							<Link to='/cookies'>SETTINGS</Link>
						</ButtonDiv>
					</Wrapper>
				</CenterContainer>
			)}
		</>
	)
}
