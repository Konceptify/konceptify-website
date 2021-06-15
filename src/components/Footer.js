import React from 'react'
import styled from 'styled-components'

const Wrapper = styled.footer`
	width: 100vw;
	height: 500px;
	position: absolute;
	bottom: 0%;

	background-color: green;

	z-index: 1;
`

const Footer = () => {
	return (
		<Wrapper>
			Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut nam
			deserunt quasi quam, ab ullam harum earum asperiores id provident
			adipisci dolore veritatis ducimus? Alias tempore nostrum rem
			assumenda facere!
		</Wrapper>
	)
}

export default Footer
