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
	width: 100vw;
	height: 240px;
	background: #262626;

	padding: 20px;
	display: flex;
	position: absolute;
	bottom: 0;
	flex-direction: column;
	align-items: center;
	justify-content: flex-end;

	* {
		color: #d9d9d9;
		text-align: center;
	}

	@media (max-width: 968px) {
		position: fixed;
		bottom: 0vh;
		left: 0;
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

		color: #d9d9d9;
		font-size: 0.8rem;
		text-decoration: none;
		border-top: 1px solid ${({ theme }) => theme.primary};

		@media (max-width: 968px) {
			position: fixed;
			bottom: 0vh;
		}
	}
`

const StyledButton = styled.button`
	border: none;
	background: ${({ theme }) => theme.primary};
	color: ${({ theme }) => theme.white};
	padding: 10px 25px;

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

const StyledParagraph = styled.p`
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
						<StyledParagraph>
							We use cookies to make your user experience
							on this website better.
						</StyledParagraph>

						<ButtonDiv>
							<StyledButton onClick={handleAcceptClick}>
								Accept all
							</StyledButton>
							<div>
								<Link to='/cookies'>SETTINGS</Link>
							</div>
						</ButtonDiv>
					</Wrapper>
				</CenterContainer>
			)}
		</>
	)
}
