import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'

const Wrapper = styled.div`
	display: none;

	@media (max-width: 768px) {
		display: flex;
		flex-direction: column;
		width: 100%;
		padding: 0 10px;
		height: 100px;
		background: inherit;
	}
`

const StyledUl = styled.ul`
	display: flex;
	list-style: none;
	margin-top: 10px;
	* {
		margin: 10px 15px 0 15px;
		color: ${(props) => props.theme.color};
		opacity: 0.7;
		text-decoration: none;
	}
`

const MobileFooter = () => {
	const date = new Date()
	console.log(date)
	return (
		<Wrapper>
			<hr />
			<StyledUl>
				<li>Instagram</li>
				<li>LinkedIn</li>
			</StyledUl>
			<StyledUl>
				<li>© Konceptify AB </li>
				<li>
					<Link to="/legal">Legal</Link>
				</li>
			</StyledUl>
		</Wrapper>
	)
}

export default MobileFooter
