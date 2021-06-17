import React, { useState } from 'react'
import styled from 'styled-components'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import PricingCard from '../components/PricingCard'
import Background from '../img/pricingbackground.png'
import PricingImg from '../img/pricing.png'

const Wrapper = styled(motion.section)`
	background-color: ${({ theme }) => theme.white};
	width: 100vw;
	height: 100vh;
	display: flex;
	justify-content: center;
	align-items: flex-end;
	position: relative;
	padding-bottom: 50px;
	z-index: 1;
	overflow: hidden;
	@media (max-width: 768px) {
		justify-content: flex-start;

		flex-direction: column;
		height: 1500px;
	}
	@media (max-width: 1768px) {
	}
`

const StyledDiv = styled.div`
	display: flex;
	width: 30%;
	flex-direction: column;
	align-items: center;
	position: relative;
	z-index: 1;
	padding: 0 30px;
	height: 80vh;
	margin-right: 10px;
	border-radius: 4px;
	background-color: ${({ theme }) => theme.primary90};
	box-shadow: 4px 4px 4px rgba(0, 0, 0, 0.25);
	justify-content: space-between;
	@media (max-width: 768px) {
		flex-direction: column;
		width: 100%;
		justify-content: flex-start;
		margin-right: 0px;
		margin-top: 50px;
		height: auto;
		background-color: ${({ theme }) => theme.primary50};
	}
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
const StyledH1 = styled.h1`
	width: 100%;
	padding: 30px 20px;
	font-size: 1.5rem;
	color: ${({ theme }) => theme.white};

	@media (max-width: 768px) {
		color: ${({ theme }) => theme.primary90};
		text-align: center;
		font-size: 1.3rem;
	}
`

const StyledH3 = styled.h3`
	margin-top: 20px;
	padding-left: 20px;
	font-size: 1.5rem;
	width: 40vw;
	color: ${({ theme }) => theme.color};

	@media (max-width: 768px) {
		display: none;
	}
`
const StyledSwitchDiv = styled.div`
	padding-left: 20px;
	padding-top: 20px;

	@media (max-width: 768px) {
		padding: 0;
		margin: 20px 0;
	}
`

const StyledPriceSelect = styled.div`
	width: 180px;
	height: 30px;
	background: #f1f1f1;
	border-radius: 15px;
	display: inline-flex;
	align-items: center;
	transition-duration: 1s;
	justify-content: ${(props) => (props.monthly ? 'flex-start' : 'flex-end')};

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
	border-radius: 50%;
	display: flex;
	justify-content: center;
	align-items: center;
	background-color: ${({ theme }) => theme.primary70};
	padding: 10px;
	:hover {
		transform: scale(1.1);
	}

	@media (max-width: 768px) {
		display: none;
	}
`

const StyledLink = styled(Link)`
	color: ${({ theme }) => theme.color};
	text-decoration: none;
	text-align: center;
	font-size: 0.8rem;
	color: ${({ theme }) => theme.white};
	font-weight: 700;

	span {
		font-size: 0.9rem;
	}
`

const StyledImg = styled.img`
	position: absolute;
	bottom: -10px;
	width: 100%;
	height: 50%;

	@media (max-width: 768px) {
		display: none;
	}
	@media (max-width: 1768px) {
		height: 60%;
		bottom: -10px;
	}
`

const StyledPricingImg = styled.img`
	width: 100%;
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
	}
`

const StyledSpan = styled.span`
	margin: 0 0 0 5px;
`

const Pricing = () => {
	const [monthly, setMonthly] = useState(true)
	return (
		<>
			<Wrapper
				initial={{ opacity: 0 }}
				animate={{ opacity: 1 }}
				exit={{ opacity: 0 }}
				transition={{ duration: 0.5 }}
			>
				<StyledImg src={Background} />
				<StyledDiv>
					<StyledH1>
						Get started today with your virtual management
						platform to access full control from everywhere
						{/* SANITY */}
					</StyledH1>
					<StyledPricingImg
						alt='pricing image'
						src={PricingImg}
					/>
				</StyledDiv>
				<StyledDiv2>
					<StyledH3>Choose between good and great</StyledH3>
					<StyledSwitchDiv>
						<StyledPriceSelect
							monthly={monthly}
							onClick={() =>
								setMonthly((prevState) => !prevState)
							}
						>
							<StyledToggle>
								{monthly ? 'MONTHLY' : 'YEARLY'}
							</StyledToggle>
						</StyledPriceSelect>
						<StyledSpan>/ unit</StyledSpan>
					</StyledSwitchDiv>

					<StyledAside>
						<StyledLink to='/contact'>
							Curious to know more? <span>Contact us</span>
						</StyledLink>
					</StyledAside>
					<StyledCardContainer>
						<PricingCard monthly={monthly} />
					</StyledCardContainer>
				</StyledDiv2>
			</Wrapper>
		</>
	)
}

export default Pricing
