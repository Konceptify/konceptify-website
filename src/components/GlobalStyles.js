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

html {
	scrollbar-width: normal;
      scrollbar-color: #777 #555;
}

html::-webkit-scrollbar {
      width: 0.5vw;
    }

    html::-webkit-scrollbar-thumb {
      
      background-color: #566c5e;
	  border-radius: 10px;
    }

    html::-webkit-scrollbar-thumb:hover {
      background-color: #3F4F45;
    }

    html::-webkit-scrollbar-track {
      background-color: #cacaca;
    }

    html::-webkit-scrollbar-track:hover {
      background-color: #c1c1c1;
    }


body {
    font-family: 'poppins';
}
`

const GlobalStyles = () => {
	return <GlobalStyle />
}

export default GlobalStyles
