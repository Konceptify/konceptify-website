import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'

const Wrapper = styled.footer`
	width: 100vw;
	height: 500px;
	position: absolute;
	bottom: 0%;
	color: ${({ theme }) => theme.backgroundColor};
	display: flex;
	justify-content: center;
	align-items: center;
	background-color: ${({ theme }) => theme.btnBgColor};

	z-index: 1;
`

const Footer = () => {
	return (
		<Wrapper>
			ZITTRON much better then LIME
			<Link to='/legal'>LEGAL</Link>
		</Wrapper>
	)
}

export default Footer
