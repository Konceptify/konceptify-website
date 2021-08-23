import React, { useState, useEffect, useContext } from 'react'
import styled from 'styled-components'
import sanityClient from '../client'
import { LanguageContext } from '../App'

const Wrapper = styled.div`
	height: 100%;
	width: 100%;
	display: flex;
	justify-content: center;
	align-items: center;
	padding: 0 40px;
	@media (max-width: 768px) {
		flex-direction: column;
		justify-content: flex-start;
	}
`

const StyledImg = styled.img`
	width: 600px;
	@media (max-width: 768px) {
		width: 100%;
		padding-top: 50px;
	}
`

const StyledDiv = styled.div`
	width: 50%;
	@media (max-width: 768px) {
		width: 100%;
	}
`

const StyledH2 = styled.h2`
	font-size: 3rem;

	color: ${({ theme }) => theme.primary};
	margin-top: -20px;
	@media (max-width: 768px) {
		font-size: 1.5rem;
		margin-top: 20px;
	}
`

const StyledH3 = styled.h3`
	font-size: 1rem;
	margin-top: 20px;
	color: ${({ theme }) => theme.primary};
`

const Communicate = () => {
	const [data, setData] = useState()
	const { lang } = useContext(LanguageContext)

	useEffect(() => {
		sanityClient
			.fetch(
				`*[_type == "communicateTab"] {
                header,
				subHeader,
				
				
            }`
			)
			.then((data) => {
				setData(data[0])
			})
			.catch((error) => console.log(error))
	}, [])

	return (
		<Wrapper>
			<StyledDiv>
				<StyledImg
					src='https://ik.imagekit.io/lct7da3kd6o/Zittron/tr:w-2000/Resurs_2_4x_m24TjcELRk.png?updatedAt=1629706140849'
					alt='chat popup'
				/>
			</StyledDiv>
			<StyledDiv>
				<StyledH2>
					{data
						? lang
							? data.header.sv
							: data.header.en
						: null}
				</StyledH2>
				<StyledH3>
					{data
						? lang
							? data.subHeader.sv
							: data.subHeader.en
						: null}
				</StyledH3>
			</StyledDiv>
		</Wrapper>
	)
}

export default Communicate
