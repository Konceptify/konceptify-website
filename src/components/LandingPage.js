import React from 'react'
import styled from 'styled-components'

const Wrapper = styled.section`
	height: 5000px;
	width: 100vw;
	background-color: #fff;
`

const LandingPage = ({ myRef }) => {
	return <Wrapper ref={myRef}>LandingPage!</Wrapper>
}

export default LandingPage
