import React from 'react'
import styled from 'styled-components'

const StyledDiv = styled.div`
	width: 300px;
	height: 400px;
	background-color: #fafafa;
	margin: 10px;
	position: relative;
	display: flex;
	justify-content: center;
	align-items: center;
	flex-direction: column;
	box-shadow: 4px 4px 4px rgba(0, 0, 0, 0.25);

	@media (max-width: 1768px) {
		margin-top: 50px;
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

const PricingCard = ({ plan }) => {
	return (
		<StyledDiv>
			<StyledLegend>{plan}</StyledLegend>
			<h3>Concept</h3>
			<h4>€ Price</h4>
			<p>per unit monthly</p>

			<ul>
				<li>Benefit</li>
				<li>Benefit</li>
				<li>Benefit</li>
				<li>Benefit</li>
				<li>Benefit</li>
				<li>Benefit</li>
			</ul>
		</StyledDiv>
	)
}

export default PricingCard
