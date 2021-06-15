import React from 'react'
import styled from 'styled-components'

const Wrapper = styled.footer`
	width: 100%;
	height: 100px;

	background-color: green;
	display: none;
	z-index: 2;

	@media (max-width: 768px) {
		display: block;
	}
`

const Footer = () => {
	return <Wrapper>Hello</Wrapper>
}

export default Footer
