import React, { useEffect, useContext, useState } from 'react'
import styled from 'styled-components'
import { useCookieConsent } from 'use-cookie-consent'
import { LanguageContext } from '../App'
import { Link } from 'react-router-dom'
import sanityClient from '../client'

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
	margin-top: 30px;
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

	@media (max-width: 900px) {
		display: none;
	}
`

const StyledButton = styled.button`
	background: ${({ theme }) => theme.primary80};
	border-radius: 10px;
	border: none;
	color: #fff;
	padding: 10px;
	margin-top: 20px;
`

export const Cookies = () => {
	const [data, setData] = useState()
	const { setOpenCookie, lang } = useContext(LanguageContext)
	const { consent, acceptAllCookies, declineAllCookies } = useCookieConsent()

	useEffect(() => {
		sanityClient
			.fetch(
				`*[_type == "cookies"] {
                title1,
                title2,
                subTitle,
                subTitleTwo,
               
				
            
            }`
			)
			.then((data) => {
				setData(data[0])
				console.log(data)
			})
			.catch((error) => console.log(error))

		setOpenCookie(false)
		// eslint-disable-next-line
	}, [setOpenCookie])

	function handleClick(e) {
		e.target.checked ? acceptAllCookies() : declineAllCookies()
	}
	function handleClickMobile() {
		consent.marketing ? declineAllCookies() : acceptAllCookies()
	}

	return (
		<Wrapper>
			{data ? (
				<>
					<h1>Cookies</h1>

					<div>
						<h2>{lang ? data.title1.sv : data.title1.en}</h2>
						<p>
							{lang ? data.subTitle.sv : data.subTitle.en}
						</p>
					</div>

					<div>
						<h2>{lang ? data.title2.sv : data.title2.en}</h2>
						<p>
							{lang
								? data.subTitleTwo.sv
								: data.subTitleTwo.en}
						</p>
						<Link to='/privacy'>Privacy Policy</Link>
						<StyledLabel>
							<input
								checked={
									consent.marketing ? true : false
								}
								onChange={handleClick}
								type='checkbox'
							/>
							<span></span>
						</StyledLabel>
						<StyledButton onClick={handleClickMobile}>
							{consent.marketing
								? 'Decline all'
								: 'Accept All'}
						</StyledButton>
					</div>
				</>
			) : (
				<div>Loading...</div>
			)}
		</Wrapper>
	)
}
