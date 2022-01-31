import React, { useState, useEffect, useContext } from 'react'
import styled from 'styled-components'
import { motion } from 'framer-motion'
import PricingCard from '../components/PricingCard'

import { LanguageContext } from '../App'

import Wave from 'react-wavify'

import sanityClient from '../client'

const Wrapper = styled(motion.section)`
	background: linear-gradient(to bottom, #fff 60%, #3f4f45 50%);
	width: 100vw;

	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	position: relative;
	padding-bottom: 70px;
	z-index: 1;
	overflow: hidden;
	@media (max-width: 768px) {
		justify-content: flex-start;
		align-items: center;
		flex-direction: column;
	}
	@media (max-width: 768px) {
	}
`

const StyledH1 = styled.h1`
	font-size: 3vw;
	margin-bottom: 100px;
	color: ${({ theme }) => theme.color};
	margin-top: 100px;

	@media (max-width: 768px) {
		font-size: 1.2rem;
		margin-bottom: 50px;
		display: none;
		position: static;
		margin-top: 0;
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

const Pricing = () => {
	const [monthly] = useState(true)
	const [data, setData] = useState()
	const { lang } = useContext(LanguageContext)

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

	return (
		<Wrapper
			initial={{ opacity: 0 }}
			animate={{ opacity: 1 }}
			exit={{ opacity: 0 }}
			transition={{ duration: 0.5 }}
		>
			<BackgroundDiv>
				<StyledWave
					fill="#3F4F45"
					paused={false}
					index="1"
					options={{
						height: 20,
						amplitude: 20,
						speed: 0.15,
						points: 4,
					}}
				/>
				<StyledWave
					fill="#a4b6ab"
					paused={false}
					index="0"
					options={{
						height: 20,
						amplitude: 20,
						speed: 0.15,
						points: 3,
					}}
				/>
			</BackgroundDiv>

			<StyledH1>
				{data ? (lang ? data.title.sv : data.title.en) : null}
			</StyledH1>
			{/* <StyledSwitchDiv>
						<StyledPriceSelect
							monthly={monthly}
							onClick={() =>
								setMonthly((prevState) => !prevState)
							}
						>
							<StyledToggle>
								{monthly
									? lang
										? 'MÅNAD'
										: 'MONTH'
									: lang
									? 'ÅR'
									: 'YEAR'}
							</StyledToggle>
							<span>
								{!monthly
									? lang
										? 'MÅNAD'
										: 'MONTH'
									: lang
									? 'ÅR'
									: 'YEAR'}
							</span>
						</StyledPriceSelect>
						<StyledSpan>
							/ {lang ? 'enhet' : 'unit'}
						</StyledSpan>
					</StyledSwitchDiv> */}

			{/* <StyledAside>
				<StyledLink to='/contact'>
					{lang ? 'Vill du veta mer?' : 'Curious to know more?'}
					{lang ? (
						<span>Kontakta oss</span>
					) : (
						<span>Contact us</span>
					)}
				</StyledLink>
			</StyledAside> */}
			<StyledCardContainer>
				<PricingCard monthly={monthly} />
			</StyledCardContainer>
		</Wrapper>
	)
}

export default Pricing
