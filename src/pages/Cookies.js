import React, { useEffect, useContext } from 'react'
import styled from 'styled-components'
import { useCookieConsent } from 'use-cookie-consent'
import { LanguageContext } from '../App'

const Wrapper = styled.div`
	height: 100vh;
	width: 100vw;
	display: flex;
	padding: 100px 20px;
	flex-direction: column;
	width: 100%;
	justify-content: center;
	align-items: center;

	@media (max-width: 1200px) {
		align-items: flex-start;
		margin-bottom: 50px;
	}

	a {
		text-decoration: none;
		color: black;
		margin-top: 50px;
		font-size: 5vw;
	}

	@media (max-width: 1200px) {
		h1 {
			margin-top: 100px;
		}
	}

	div {
		display: flex;
		width: 50vw;
		flex-direction: column;
		margin: 20px;

		@media (max-width: 1200px) {
			margin: 10px 0px;
			width: 90%;
		}
		* {
			font-size: 1vw;

			@media (max-width: 1200px) {
				font-size: 1rem;
			}
		}
	}
`

const StyledLabel = styled.label`
	margin-top: 10px;
	position: relative;
	display: inline-block;
	width: 60px;
	height: 34px;

	input {
		opacity: 0;
		width: 0;
		height: 0;

		:checked + span {
			background-color: ${({ theme }) => theme.primary80};
			@media (max-width: 1200px) {
				width: 60px;
			}
		}

		input:focus + span {
			box-shadow: 0 0 1px ${({ theme }) => theme.primary80};
		}

		:checked + span:before {
			-webkit-transform: translateX(26px);
			-ms-transform: translateX(26px);
			transform: translateX(26px);
		}
	}

	span {
		position: absolute;
		cursor: pointer;
		top: 0;
		left: 0;
		right: 0;
		bottom: 0;
		background-color: #ccc;
		-webkit-transition: 0.4s;
		transition: 0.4s;

		:before {
			position: absolute;
			content: '';
			height: 26px;
			width: 26px;
			left: 4px;
			bottom: 4px;
			background-color: white;
			-webkit-transition: 0.4s;
			transition: 0.4s;
			border-radius: 50%;
		}

		border-radius: 34px;
	}
`

export const Cookies = () => {
	const { setOpenCookie } = useContext(LanguageContext)
	const { consent, acceptAllCookies, declineAllCookies } = useCookieConsent()

	console.log(consent)

	useEffect(() => {
		setOpenCookie(false)
		// eslint-disable-next-line
	}, [setOpenCookie])

	function handleClick(e) {
		e.target.checked ? acceptAllCookies() : declineAllCookies()
	}

	return (
		<Wrapper>
			<h1>Cookies</h1>

			<div>
				<h2>Necessary Cookies (Always Active)</h2>

				<p>
					These cookies are necessary for the website to function
					and cannot be switched off in our systems. They are
					usually only set in response to actions made by you
					which amount to a request for services, such as setting
					your privacy preferences, logging in, or filling in
					forms. You can set your browser to block or alert you
					about these cookies, but some parts of the site will
					not then work. These cookies do not store any
					personally identifiable information.
				</p>
			</div>

			<div>
				<h2>Personalization, Analytics, and Marketing Cookies</h2>
				<p>
					These cookies allow us to: Remember information that
					changes the way our service behaves or looks, such as
					the "remember me" functionality Count visits and
					traffic sources so we can measure and improve the
					performance of our site Test new advertisements, pages,
					features or new functionality of the service to see how
					our users react to them If you do not allow these
					cookies: We will not know when you have visited our
					site, and will not be able to monitor its performance
					Some or all of these services may not function properly
				</p>
				<StyledLabel>
					<input
						checked={consent.marketing ? true : false}
						onChange={handleClick}
						type='checkbox'
					/>
					<span></span>
				</StyledLabel>
			</div>
		</Wrapper>
	)
}
