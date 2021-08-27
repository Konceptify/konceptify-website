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
	width: 90%;
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
	font-size: 3vw;

	color: ${({ theme }) => theme.primary};
	margin-top: -20px;
	max-width: 80%;
	@media (max-width: 1768px) {
		padding-left: 40px;
	}
	@media (max-width: 768px) {
		font-size: 1.5rem;
		margin-top: 20px;
	}
`

const StyledH3 = styled.h3`
	font-size: 0.9rem;
	width: 70%;
	margin-top: 20px;
	padding-left: 40px;
	color: ${({ theme }) => theme.primary90};
	@media (max-width: 1768px) {
		padding-left: 40px;
	}
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
					src='https://ik.imagekit.io/lct7da3kd6o/Zittron/tr:w-600/Resurs_5_08FgDgtoW.png?updatedAt=1629718921512'
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
