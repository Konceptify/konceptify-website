import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import PricingCard from '../components/PricingCard'
import Footer from '../components/Footer'

import Wave from 'react-wavify'

import sanityClient from '../client'

const Wrapper = styled(motion.section)`
	background: linear-gradient(to bottom, #fff 60%, #3f4f45 50%);
	width: 100vw;
	height: 100vh;
	display: flex;
	justify-content: center;
	align-items: flex-end;
	position: relative;
	padding-bottom: 70px;
	z-index: 1;
	overflow: hidden;
	@media (max-width: 768px) {
		justify-content: flex-start;
		align-items: flex-start;
		flex-direction: column;
		height: 1100px;
	}
	@media (max-width: 1768px) {
	}
`

const StyledH1 = styled.h1`
	font-size: 2vw;
	position: fixed;
	top: 20%;
	left: 7%;
	color: ${({ theme }) => theme.primary90};
`

const StyledDiv2 = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: space-between;
	height: 580px;
	align-items: center;

	@media (max-width: 768px) {
		width: 100%;
	}
`

const StyledSwitchDiv = styled.div`
	padding-left: 20px;
	padding-top: 0px;

	@media (max-width: 768px) {
		padding-left: 0px;
		margin: 20px 0;
	}
`

const StyledPriceSelect = styled.div`
	width: 180px;
	height: 30px;
	background: #f1f1f1;
	border-radius: 15px;
	display: inline-flex;
	flex-direction: ${(props) => (props.monthly ? 'row' : 'row-reverse')};
	align-items: center;
	transition-duration: 1s;
	justify-content: space-between;

	span {
		color: #ccc;
		padding-right: ${(props) => (props.monthly ? '20px' : '0px')};
		padding-left: ${(props) => (props.monthly ? '-10px' : '20px')};
		font-size: 0.8rem;
	}

	@media (max-width: 768px) {
		margin: 0;
	}
`

const StyledToggle = styled.div`
	border-radius: 15px;
	width: 90px;
	height: 30px;
	background: ${({ theme }) => theme.primary60};
	display: flex;
	justify-content: center;
	align-items: center;
	font-size: 0.8rem;
	color: ${({ theme }) => theme.white};
`

const StyledAside = styled.div`
	position: absolute;
	left: 80%;
	bottom: 80%;
	width: 100px;
	height: 100px;
	min-width: 100px;
	min-height: 100px;
	border-radius: 50%;
	display: flex;
	justify-content: center;
	align-items: center;
	background-color: ${({ theme }) => theme.primary70};
	padding: 10px;
	transition: 0.5s linear;
	transform: scale(1);
	:hover {
		transform: scale(1.1);
		transition: 0.5s linear;
	}

	@media (max-width: 768px) {
		display: none;
	}
`

const StyledLink = styled(Link)`
	color: ${({ theme }) => theme.color};
	text-decoration: none;
	text-align: center;
	font-size: 0.7rem;
	color: ${({ theme }) => theme.white};
	font-weight: 700;

	span {
		font-size: 0.8rem;
	}
`

const BackgroundDiv = styled.div`
	position: absolute;
	bottom: 0;
	width: 100vw;
	height: 50%;
	z-index: -1;
`

const StyledWave = styled(Wave)`
	position: absolute;
	top: 0px;
	z-index: ${(props) => props.index};
	@media (max-width: 768px) {
		display: none;
	}
`

const StyledCardContainer = styled.div`
	display: flex;
	justify-content: center;
	@media (max-width: 768px) {
		align-items: center;
		justify-content: flex-start;
		background: var(--accent-color);
		width: 100%;
		flex-direction: column;
		padding-top: 50px;
	}
`

const StyledSpan = styled.span`
	margin: 0 0 0 5px;
`

const Pricing = () => {
	const [monthly, setMonthly] = useState(true)
	const [data, setData] = useState()

	useEffect(() => {
		sanityClient
			.fetch(
				`*[_type == "pricingPageHeader"] {
                title,
				
            }`
			)
			.then((data) => setData(data[0]))
			.catch((error) => console.log(error))
	}, [])

	const monthlyS =
		window.navigator.language === 'sv' && 'sv-SE' ? 'MÅNAD' : 'ÅR'
	const yearlyS =
		window.navigator.language === 'sv' && 'sv-SE' ? 'ÅR' : 'MÅNAD'

	return (
		<>
			<Wrapper
				initial={{ opacity: 0 }}
				animate={{ opacity: 1 }}
				exit={{ opacity: 0 }}
				transition={{ duration: 0.5 }}
			>
				<BackgroundDiv>
					<StyledWave
						fill='#3F4F45'
						paused={false}
						index='1'
						options={{
							height: 20,
							amplitude: 20,
							speed: 0.15,
							points: 4,
						}}
					/>
					<StyledWave
						fill='#a4b6ab'
						paused={false}
						index='0'
						options={{
							height: 20,
							amplitude: 20,
							speed: 0.15,
							points: 3,
						}}
					/>
				</BackgroundDiv>
				<StyledH1>Välj den plan som passar dig</StyledH1>
				<StyledDiv2>
					<StyledSwitchDiv>
						<StyledPriceSelect
							monthly={monthly}
							onClick={() =>
								setMonthly((prevState) => !prevState)
							}
						>
							<StyledToggle>
								{monthly ? monthlyS : yearlyS}
							</StyledToggle>
							<span>{monthly ? yearlyS : monthlyS}</span>
						</StyledPriceSelect>
						<StyledSpan>/ unit</StyledSpan>
					</StyledSwitchDiv>

					<StyledAside>
						<StyledLink to='/contact'>
							{window.navigator.language === 'sv' &&
							'sv-SE'
								? 'Vill du veta mer?'
								: 'Curious to know more?'}
							{window.navigator.language === 'sv' &&
							'sv-SE' ? (
								<span>Kontakta oss</span>
							) : (
								<span>Contact us</span>
							)}
						</StyledLink>
					</StyledAside>
					<StyledCardContainer>
						<PricingCard monthly={monthly} />
					</StyledCardContainer>
				</StyledDiv2>
			</Wrapper>
			<Footer />
		</>
	)
}

export default Pricing
