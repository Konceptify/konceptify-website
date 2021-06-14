import React from 'react'
import styled from 'styled-components'

import PricingCard from '../components/PricingCard'
import Background from '../img/pricingbackground.png'
import PricingImg from '../img/pricing.png'

const Wrapper = styled.div`
	height: 100%;
	width: 100vw;
	display: flex;
	justify-content: space-between;
	flex-direction: column;
	padding: 0 40px;
	position: relative;
	z-index: 1;
`

const StyledH2 = styled.h1`
	position: absolute;
	top: 100px;
	left: 40px;
	width: 50%;
`

const StyledImg = styled.img`
	position: absolute;
	bottom: 0;
	width: 100%;

	@media (max-width: 768px) {
		height: 50%;
		bottom: 0px;
	}
`

const StyledPricingImg = styled.img`
	width: 500px;
	margin-right: 120px;
`

const StyledDiv = styled.div`
	display: flex;
	width: 100%;
	align-items: center;
	justify-content: space-between;
`

const Pricing = () => {
	return (
		<>
			<StyledImg src={Background} />
			<Wrapper>
				<StyledDiv>
					<StyledH2>
						Get started today with your virtual management
						platform to access full control from everywhere
						{/* SANITY */}
					</StyledH2>
				</StyledDiv>
				<StyledDiv>
					<StyledPricingImg
						alt='pricing image'
						src={PricingImg}
					/>

					<PricingCard plan='BASIC' />
					<PricingCard plan='FULL SERVICE' />
				</StyledDiv>
			</Wrapper>
		</>
	)
}

export default Pricing
