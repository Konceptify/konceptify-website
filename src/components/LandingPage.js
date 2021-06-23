import React from 'react'
import styled from 'styled-components'
import Footer from './Footer'

const Wrapper = styled.section`
	width: 100vw;
	background-color: #fff;
`

const StyledSection = styled.section`
	background-color: ${({ bg }) => bg};
	width: 100vw;
	height: 100vh;
`

const LandingPage = ({ myRef }) => {
	return (
		<>
			<Wrapper ref={myRef}>
				<StyledSection bg='#caca'></StyledSection>
				<StyledSection bg='#fafafa'></StyledSection>
				<StyledSection bg='#ccc'></StyledSection>
				<Footer />
			</Wrapper>
		</>
	)
}

export default LandingPage
