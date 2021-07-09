import React from 'react'
import styled from 'styled-components'
import { ReactComponent as Arrow } from '../assets/Vector.svg'

const Wrapper = styled.section`
	width: 100vw;
	margin-bottom: 40px;
	display: flex;
	align-items: center;
	@media (max-width: 768px) {
		flex-direction: column;
	}
`

const StyledDiv = styled.div`
	width: 50%;
	height: 100%;
	display: flex;
	justify-content: center;
	align-items: center;
	@media (max-width: 768px) {
		width: 100%;
		border-radius: 0px;
		justify-content: flex-start;
		align-items: flex-start;
	}
`
const StyledDiv2 = styled.div`
	width: 50%;
	height: 80vh;
	display: flex;
	padding: 0 20px 0 0;
	justify-content: center;
	align-items: center;
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
`

const StyledHeader = styled.div`
	font-size: 5rem;
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
		font-size: 1.5rem;
	}
`

const StyledHeaderTest = styled.div`
	width: 80%;
	height: 90%;
	display: flex;
	justify-content: center;
	flex-direction: column;
	align-items: space-between;
	text-align: center;
	padding: 0px 40px;
	border: 1px solid black;
`

const StyledH3 = styled.h3`
	font-size: 2rem;
	font-style: italic;
`

const LogoBox = styled.div`
	height: 40px;
	width: 100%;
	border: 1px solid black;
`

const Testemonials = () => {
	return (
		<Wrapper>
			<StyledDiv>
				<StyledBox>
					<StyledHeader>
						<span>“</span>What Our Customers Are Saying
					</StyledHeader>
				</StyledBox>
			</StyledDiv>
			<StyledDiv2>
				<Arrow />
				<StyledHeaderTest>
					<StyledH3>
						" Fan va bra ni är! Vad skulle jag göra utan er?
						Mina butiker tjänar mer pengar än någonsin och
						mina anställda har som jag total kontroll över
						verksamheten "
					</StyledH3>
					<LogoBox />
				</StyledHeaderTest>
				<ReverseArrow />
			</StyledDiv2>
		</Wrapper>
	)
}

export default Testemonials
