import React from 'react'
import styled from 'styled-components'

const StyledButton = styled.button`
	background-color: ${(props) => props.theme.primary};
	color: ${(props) => props.theme.btnborderColor};
	border: 1px solid ${(props) => props.theme.btnborderColor};
	border-radius: 30px;
	border: none;
	width: fit-content;

	display: flex;
	align-items: center;
	justify-content: space-evenly;
	cursor: pointer;
	padding: 1em 2em;
	font-size: 1rem;
	box-shadow: 2px 2px 0px ${({ theme }) => theme.primary70};

	:hover {
		background-color: ${(props) => props.theme.primary80};
	}

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
		font-size: 1em;

		svg {
			transform: rotate(90deg);
		}
	}
`

const Button = ({ children, handleClick }) => {
	return <StyledButton onClick={handleClick}>{children}</StyledButton>
}

export default Button
