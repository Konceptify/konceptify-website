import React, { useState } from 'react'
import styled from 'styled-components'
import { ReactComponent as Arrow } from '../assets/Vector.svg'

const Wrapper = styled.section`
	width: 100vw;
	margin-bottom: 40px;
	display: flex;
	align-items: center;
	padding: 0px 40px;
	@media (max-width: 768px) {
		flex-direction: column;
	}
`

const StyledDiv = styled.div`
	width: 50%;
	height: 90vh;
	display: flex;
	justify-content: center;
	align-items: center;

	@media (max-width: 768px) {
		width: 100%;
		border-radius: 0px;
		justify-content: flex-start;
		align-items: flex-start;
		height: 30vh;
	}
`
const StyledDiv2 = styled.div`
	width: 50%;
	height: 90vh;
	display: flex;
	justify-content: center;
	align-items: center;
	flex-direction: column;

	@media (max-width: 768px) {
		width: 100%;
		border-radius: 0px;
		justify-content: flex-start;
		align-items: flex-start;
	}
`

const StyledBox = styled.div`
	width: 90%;
	height: 90%;
	border-radius: 10px 10px 150px 10px;
	background: ${({ theme }) => theme.primary};
	display: flex;
	justify-content: center;
	align-items: center;
	color: ${({ theme }) => theme.white};
	text-align: center;
	position: relative;

	@media (max-width: 768px) {
		width: 100%;
		height: 100%;
		border-radius: 0px;
		align-items: flex-start;
		background: inherit;
		color: ${({ theme }) => theme.primary};
	}
`

const ReverseArrow = styled(Arrow)`
	transform: rotate(180deg);
	@media (max-width: 768px) {
		display: none;
	}
`

const Arrow1 = styled(Arrow)`
	@media (max-width: 768px) {
		display: none;
	}
`

const StyledHeader = styled.div`
	font-size: 4vw;
	width: 100%;
	padding: 15%;
	text-align: left;
	font-weight: 700;
	span {
		margin-right: 5px;
		color: ${({ theme }) => theme.primary70};
		position: relative;
		top: -10px;
	}

	@media (max-width: 768px) {
		font-size: 2rem;
		padding: 0;
	}
`

const StyledHeaderTest = styled.div`
	width: 80%;
	height: 90%;
	display: flex;
	justify-content: flex-end;
	align-items: center;
	text-align: center;
	padding: 0px 40px;
	@media (max-width: 768px) {
		width: 100%;
		height: auto;
		text-align: left;
		padding: 0;
	}
`

const StyledH3 = styled.h3`
	font-size: 2rem;
	font-style: italic;
	@media (max-width: 768px) {
		font-size: 1.5rem;
	}
`

const StyledDivAuthor = styled.div`
	width: 80%;
	text-align: center;
	padding-bottom: 30px;
	@media (max-width: 768px) {
		margin-top: 20px;
		padding-bottom: o;
	}
`

const StyledParagraph = styled.p`
	margin-bottom: 5px;
`

const LogoBox = styled.div`
	height: 100px;
	width: 100%;
	border: 1px solid black;
	display: flex;
	justify-content: center;
	align-items: center;
`

const Testemonials = () => {
	const [carousel, setCarousel] = useState(true)

	return (
		<Wrapper>
			<StyledDiv>
				<StyledBox>
					<StyledHeader>
						<span>“</span>What Our Customers Are Saying
					</StyledHeader>
				</StyledBox>
			</StyledDiv>
			<Arrow1 onClick={() => setCarousel(true)} />
			<StyledDiv2>
				<StyledHeaderTest>
					{carousel ? (
						<StyledH3>
							" Fan va bra ni är! Vad skulle jag göra utan
							er? Mina butiker tjänar mer pengar än
							någonsin och mina anställda har som jag total
							kontroll över verksamheten "
						</StyledH3>
					) : (
						<StyledH3>
							" Om alla hade varit lika progressiva som er
							så hade vi avslutat alla världskrig vid det
							här läget! "
						</StyledH3>
					)}
				</StyledHeaderTest>
				<StyledDivAuthor>
					<StyledParagraph>
						{carousel
							? 'Stefan Persson, HM'
							: 'Elon Musk, A bit here and there'}
					</StyledParagraph>
					<LogoBox>LOGO HERE</LogoBox>
				</StyledDivAuthor>
			</StyledDiv2>
			<ReverseArrow onClick={() => setCarousel(false)} />
		</Wrapper>
	)
}

export default Testemonials
