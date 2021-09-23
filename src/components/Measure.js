import React, { useEffect, useContext, useState } from 'react'
import sanityClient from '../client'
import styled from 'styled-components'
import { LanguageContext } from '../App'
import Spinner from './Spinner'

const Wrapper = styled.section`
	width: 100vw;
	height: 100vh;
	display: flex;
	justify-content: center;
	align-items: center;
	margin-bottom: 40px;
	background-color: ${({ theme }) => theme.whiteOf};
	@media (max-width: 768px) {
		flex-direction: column;
		justify-content: flex-start;
		padding: 40px;
	}
`

const StyledImg = styled.img`
	width: 35vw;
	margin-left: 40px;

	@media (max-width: 768px) {
		width: 80vw;
		margin-right: 0px;
		margin-top: 60px;
	}
`

const StyledDiv = styled.div`
	width: 50%;
	display: flex;
	justify-content: center;
	align-items: center;
	flex-direction: column;

	@media (max-width: 768px) {
		width: 100%;
	}
`
const StyledDiv2 = styled.div`
	width: 50%;

	@media (max-width: 768px) {
		width: 100%;
	}
`
const StyledH2 = styled.h2`
	font-size: 2.5vw;
	max-width: 28ch;
	margin: 20px 0px;
	color: ${({ theme }) => theme.primary};
	@media (max-width: 768px) {
		font-size: 1.2rem;
		margin: 0 px;
		max-width: 100%;
	}
`
const StyledH3 = styled.h3`
	font-size: 0.9rem;
	max-width: 70%;
	margin: 20px 0px;
	color: ${({ theme }) => theme.primary};
	@media (max-width: 768px) {
		width: 100%;
	}
`
const StyledH4 = styled.h4`
	font-size: 0.8rem;
	max-width: 70%;
	color: ${({ theme }) => theme.primary};
	@media (max-width: 768px) {
		width: 100%;
	}
`

const Measure = () => {
	const { lang } = useContext(LanguageContext)
	const [data, setData] = useState()

	useEffect(() => {
		sanityClient
			.fetch(
				`*[_type == "measure"] {
                mainTitle,
                subTitle,
                subTitleTwo,
                image,
				"imageURL": image.asset->url,
				
            
            }`
			)
			.then((data) => {
				setData(data[0])
			})
			.catch((error) => console.log(error))
	}, [])

	return (
		<>
			{data?.mainTitle &&
				(data ? (
					<Wrapper>
						<StyledDiv>
							<StyledImg
								src={data.imageURL}
								alt='Laptop computer'
							/>
						</StyledDiv>
						<StyledDiv2>
							<StyledH2>
								{lang
									? data.mainTitle.sv
									: data.mainTitle.en}
							</StyledH2>
							<StyledH3>
								{lang
									? data.subTitle.sv
									: data.subTitle.en}
							</StyledH3>
							<StyledH4>
								{data?.subTitleTwo
									? lang
										? data.subTitleTwo.sv
										: data.subTitleTwo.en
									: null}
							</StyledH4>
						</StyledDiv2>
					</Wrapper>
				) : (
					<Spinner />
				))}
		</>
	)
}

export default Measure
