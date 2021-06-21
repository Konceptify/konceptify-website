import React from 'react'
import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`

:root {
		--accent-color: ${({ theme }) => theme.primary};
        --white: ${({ theme }) => theme.backgroundColor2}
	}
 
* {
margin: 0;
padding: 0;
box-sizing: border-box;
scroll-behavior: smooth;
outline: none;
}

body {
    font-family: 'Montserrat';
}
`

const GlobalStyles = () => {

	
	return <GlobalStyle />
}

export default GlobalStyles
