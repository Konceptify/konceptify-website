import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import sanityClient from '../client'

const Wrapper = styled.div`
	height: 100%;
	width: 100%;
	display: flex;
	justify-content: center;
	align-items: center;
	padding: 0 40px;
`

const StyledDiv = styled.div`
	width: 50%;
`

const StyledH2 = styled.h2`
	font-size: 3rem;

	color: ${({ theme }) => theme.primary};
	margin-top: -20px;
`

const StyledH3 = styled.h3`
	font-size: 1rem;
	margin-top: 20px;
	color: ${({ theme }) => theme.primary};
`

const Communicate = () => {
	const [data, setData] = useState()

	useEffect(() => {
		sanityClient
			.fetch(
				`*[_type == "communicateTab"] {
                header,
				subHeader,
				
				
            }`
			)
			.then((data) => {
				const { header, subHeader } = data[0]
				setData({
					header:
						window.navigator.language === 'sv' || 'sv-SE'
							? header.sv
							: header.en,
					subHeader:
						window.navigator.language === 'sv' || 'sv-SE'
							? subHeader.sv
							: subHeader.en,
				})
			})
			.catch((error) => console.log(error))
	}, [])

	return (
		<Wrapper>
			<StyledDiv></StyledDiv>
			<StyledDiv>
				<StyledH2>{data && data.header}</StyledH2>
				<StyledH3>{data && data.subHeader}</StyledH3>
			</StyledDiv>
		</Wrapper>
	)
}

export default Communicate
