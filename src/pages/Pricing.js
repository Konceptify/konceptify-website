import React from 'react'
import styled from 'styled-components'

import PricingCard from '../components/PricingCard'
import Background from '../img/pricingbackground.png'
import PricingImg from '../img/pricing.png'

const Wrapper = styled.section`
	background-color: ${({ theme }) => theme.backgroundColor};
	width: 100vw;
	height: 100vh;
	display: flex;
	justify-content: space-between;
	flex-direction: column;
	position: relative;
	z-index: 1;
	@media (max-width: 768px) {
		justify-content: flex-start;
	}
`

const StyledH2 = styled.h1`
	position: absolute;
	top: 100px;
	left: 40px;
	width: 50%;
	color: ${({ theme }) => theme.color};
	@media (max-width: 768px) {
		width: 100%;
		left: 0;
		padding: 20px;
		font-size: 1.5rem;
		position: relative;
		top: 100px;
	}
`

const StyledImg = styled.img`
	position: absolute;
	bottom: 0;
	width: 100%;

	@media (max-width: 768px) {
		display: none;
	}
	@media (max-width: 1768px) {
		height: 75%;
		bottom: 0px;
	}
`

const StyledPricingImg = styled.img`
	width: 600px;
	margin-right: 120px;
	margin-top: 200px;
	z-index: 1;
	@media (max-width: 768px) {
		display: none;
	}
`

const StyledCardContainer = styled.div`
	display: flex;
	justify-content: center;
	margin-right: 10vw;
	margin-top: 300px;
	@media (max-width: 1768px) {
		margin-top: 150px;
	}
	@media (max-width: 768px) {
		flex-direction: column;
		margin: 150px 0 0px 0;
		width: 100%;
		align-items: center;
		background: linear-gradient(
			to bottom,
			var(--backgroundColor) 50%,
			var(--accent-color) 50%
		);
	}
`

const StyledDiv = styled.div`
	display: flex;
	width: 100%;
	align-items: center;
	justify-content: center;
	@media (max-width: 768px) {
		flex-direction: column;
		justify-content: flex-start;
	}
`
const StyledDiv2 = styled(StyledDiv)``

const Pricing = () => {
	return (
		<>
			<Wrapper>
				<StyledImg src={Background} />
				<StyledDiv>
					<StyledH2>
						Get started today with your virtual management
						platform to access full control from everywhere
						{/* SANITY */}
					</StyledH2>
				</StyledDiv>
				<StyledDiv2>
					<StyledPricingImg
						alt='pricing image'
						src={PricingImg}
					/>
					<StyledCardContainer>
						<PricingCard plan='BASIC' />
						<PricingCard plan='FULL SERVICE' />
					</StyledCardContainer>
				</StyledDiv2>
			</Wrapper>
		</>
	)
}

export default Pricing
