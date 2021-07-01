import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'

const Wrapper = styled.footer`
	width: 100vw;
	height: 500px;

	bottom: 0%;

	display: flex;
	justify-content: center;
	align-items: center;

	z-index: 1;
`

const Footer = () => {
	return (
		<Wrapper>
			ZITTRON much better then LIME | <Link to='/legal'>LEGAL</Link>
		</Wrapper>
	)
}

export default Footer
