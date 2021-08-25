import React from 'react'
import styled from 'styled-components'

const StyledButton = styled.button`
	max-width: 150px;
	height: 40px;
	background-color: ${(props) => props.theme.primary};
	color: ${(props) => props.theme.btnborderColor};
	border: 1px solid ${(props) => props.theme.btnborderColor};
	border-radius: 30px;
	border: none;
	margin-top: 20px;
	letter-spacing: 2px;
	display: flex;
	align-items: center;
	justify-content: space-evenly;
	cursor: pointer;
	padding: 15px 18px;
	font-size: 0.6rem;
	box-shadow: 2px 2px 0px ${({ theme }) => theme.primary70};
	a {
		text-decoration: none;
		color: ${({ theme }) => theme.white};
	}

	svg {
		fill: ${({ theme }) => theme.btnborderColor};
		size: 40;
		padding-bottom: 2px;
		transform: rotate(0deg);
		transition-duration: 0.5s;
	}

	:hover {
		svg {
			transform: rotate(90deg);
			transition-duration: 0.5s;
		}
	}

	@media (max-width: 768px) {
		max-width: 100px;
		font-size: 0.5rem;
		height: 30px;
		padding: 5px 10px;
	}
`

const Button = ({ text, children }) => {
	return (
		<StyledButton>
			{text}
			{children}
		</StyledButton>
	)
}

export default Button
