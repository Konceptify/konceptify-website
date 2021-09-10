import React, { useEffect, useState, useContext } from 'react'
import styled from 'styled-components'
import sanityClient from '../client'
import { Link } from 'react-router-dom'
import { LanguageContext } from '../App'

const StyledDiv = styled.div`
	width: 350px;
	min-height: 600px;
	background-color: #fafafa;
	margin: 0 10px;
	position: relative;
	display: flex;
	padding-top: 50px;
	align-items: center;
	flex-direction: column;
	border-radius: 30px;
	a {
		margin: 10px 0px;
		text-decoration: none;
		position: absolute;
		bottom: 10px;
		border: none;
		background: ${({ theme }) => theme.primary90};
		color: white;
		padding: 10px 20px;
		border-radius: 20px;
		text-transform: uppercase;
		font-size: 0.5rem;
		letter-spacing: 0.1rem;
	}

	:last-child {
		border: 4px solid #ffd600;
	}

	@media (max-width: 768px) {
		margin: 50px 0px;
		width: 80%;
		height: 90vh;
	}
`

const StyledLegend = styled.div`
	height: 30px;
	background-color: #ffd600;
	border-radius: 15px;
	position: absolute;

	top: -15px;
	display: flex;
	justify-content: center;
	align-items: center;
	text-align: center;
	font-weight: 700;
	font-size: 11px;
	padding: 0 15px;
`

const StyledH3 = styled.h3`
	font-size: 1.5rem;
	padding: 20px 20px;
	text-align: center;
	height: 60px;
	width: 100%;
	color: ${({ theme }) => theme.color};
`

const StyledPriceContainer = styled.div`
	width: 100%;
	display: flex;
	flex-direction: column;
	align-items: center;
`

const StyledH4 = styled.h4`
	font-size: 2rem;
	color: ${({ theme }) => theme.color};

	text-align: center;
	text-decoration: none;

	span {
		font-size: 1rem;
		margin-left: 5px;
	}
`

const StyledUl = styled.ul`
	position: absolute;
	display: flex;
	width: 100%;
	height: 70%;
	flex-direction: column;
	flex-wrap: nowrap;
	bottom: 10px;
	padding-left: 30px;
	padding-bottom: 10px;
	padding-top: 30px;

	@media (max-width: 768px) {
		padding-top: 30px;
		flex-wrap: nowrap;
		padding-left: 0px;
	}
`

const StyledLi = styled.li`
	padding-left: 20px;
	padding-top: 9px;
	font-size: 0.8rem;
	list-style: none;
	color: ${({ theme }) => theme.color};

	:before {
		content: '\f00c'; /* FontAwesome Unicode */
		font-family: FontAwesome;
		display: inline-block;
		padding-right: 10px;
	}
`

const PricingCard = ({ monthly }) => {
	const [subscriptions, setSubscriptions] = useState([])
	const { lang } = useContext(LanguageContext)

	function hasNumber(myString) {
		return /\d/.test(myString)
	}

	useEffect(() => {
		sanityClient
			.fetch(
				`*[_type == "pricingBenefits"] {
                legend,
				header,
				priceMonth,
				priceAnual,
				benefits,				
            }`
			)
			.then((data) => setSubscriptions(data.reverse()))

			.catch((error) => console.log(error))
	}, [])

	return (
		<>
			{subscriptions &&
				subscriptions.map(
					(
						{
							legend,
							priceMonth,

							header,
							benefits,
						},
						ind
					) => {
						return (
							<StyledDiv key={ind}>
								<StyledLegend>
									{lang ? legend.sv : legend.en}
								</StyledLegend>

								<StyledPriceContainer>
									<StyledH4 monthly={monthly}>
										{lang
											? hasNumber(
													priceMonth.sv
											  )
												? `${priceMonth.sv} SEK`
												: priceMonth.sv
											: hasNumber(
													priceMonth.en
											  )
											? `${priceMonth.en} €`
											: priceMonth.en}
										<span>
											{lang
												? hasNumber(
														priceMonth.sv
												  )
													? 'per enhet / månad'
													: null
												: hasNumber(
														priceMonth.sv
												  )
												? 'per unit / month'
												: null}
										</span>
									</StyledH4>
								</StyledPriceContainer>
								<StyledH3>
									{lang ? header.sv : header.en}
								</StyledH3>

								<StyledUl>
									{lang
										? benefits.sv.map(
												(benefits, ind) => {
													return (
														<StyledLi
															key={
																ind
															}
														>
															{
																benefits
															}
														</StyledLi>
													)
												}
										  )
										: benefits.en.map(
												(benefits, ind) => {
													return (
														<StyledLi
															key={
																ind
															}
														>
															{
																benefits
															}
														</StyledLi>
													)
												}
										  )}
								</StyledUl>
								{!hasNumber(priceMonth.sv) ? (
									<Link to='/contact'>
										{lang
											? 'Kontakta oss'
											: 'Contact Us'}
									</Link>
								) : null}
							</StyledDiv>
						)
					}
				)}
		</>
	)
}

export default PricingCard
