import React, { useContext } from 'react'
import styled from 'styled-components'
import { useCookieConsent } from 'use-cookie-consent'
import { LanguageContext } from '../App'
import { Link } from 'react-router-dom'

const CenterContainer = styled.div`
	width: 100vw;
	position: fixed;
	height: 50vw;
	display: flex;
	justify-content: center;
	align-items: center;
	z-index: 20000;
	background: rgba(255, 255, 255, 0.6);

	@media (max-width: 768px) {
		height: 100vh;
	}
`

const Wrapper = styled.aside`
	width: 25vw;
	height: 300px;
	background: ${({ theme }) => theme.primary90};
	border-radius: 20px;
	padding: 20px;
	display: flex;
	position: absolute;
	flex-direction: column;
	align-items: center;
	justify-content: space-between;
	* {
		color: ${({ theme }) => theme.white};
		text-align: center;
	}

	@media (max-width: 968px) {
		width: 90vw;
		position: fixed;
	}
`

const ButtonDiv = styled.div`
	display: flex;
	justify-content: space-evenly;
	align-items: center;
	height: 50%;
	width: 100%;
`

const StyledButton = styled.button`
	border: none;
	background: ${({ theme }) => theme.primary80};
	padding: 10px 25px;
	margin: 5px;

	cursor: pointer;
	text-transform: uppercase;
	font-size: 0.8rem;
	transition: all 0.3s linear;

	:hover {
		background-color: ${({ theme }) => theme.primary90};
		outline: 1px solid ${({ theme }) => theme.primary70};
	}
`

const StyledSettings = styled.p`
	position: absolute;
	bottom: 10px;

	color: white;
	font-size: 0.8rem;
`

const Styledh2 = styled.h2`
	font-size: 4vw;
	color: ${({ theme }) => theme.primary60};
`

const StyledH3 = styled.h4`
	padding: 10px;
`

export const Cookie = () => {
	const { openCookie, setOpenCookie } = useContext(LanguageContext)

	const { consent, acceptAllCookies, declineAllCookies } = useCookieConsent()

	function handleAcceptClick() {
		acceptAllCookies()
		setOpenCookie(false)
	}

	function handleDeclineClick() {
		declineAllCookies()
		setOpenCookie(false)
	}

	console.log(consent)

	return (
		<>
			{openCookie && (
				<CenterContainer>
					<Wrapper>
						<Styledh2>cookie?</Styledh2>
						<StyledH3>
							We use cookies to make your user experience
							on this website better.
						</StyledH3>

						<ButtonDiv>
							<StyledButton onClick={handleAcceptClick}>
								Accept all
							</StyledButton>

							<StyledButton onClick={handleDeclineClick}>
								Reject all
							</StyledButton>
						</ButtonDiv>
						<StyledSettings>
							<Link to='/cookies'>Settings</Link>
						</StyledSettings>
					</Wrapper>
				</CenterContainer>
			)}
		</>
	)
}
