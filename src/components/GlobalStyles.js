import React from 'react'
import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`
 
* {
margin: 0;
padding: 0;
box-sizing: border-box;

}

body {
    font-family: 'Montserrat';
}
`

const GlobalStyles = () => {
	return <GlobalStyle />
}

export default GlobalStyles
