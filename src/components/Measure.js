import React, { useEffect, useContext, useState } from 'react'
import sanityClient from '../client'
import styled from 'styled-components'
import { LanguageContext } from '../App'

const Wrapper = styled.section`
	width: 100vw;
	height: 100vh;
	display: flex;
	justify-content: center;
	align-items: center;

	@media (max-width: 768opx) {
		flex-direction: column;
	}
`

const StyledImg = styled.img`
	width: 35vw;
	margin-right: 40px;

	@media (max-width: 768opx) {
		width: 95vw;
	}
`

const StyledDiv = styled.div`
	width: 50%;

	@media (max-width: 768opx) {
		width: 100%;
	}
`
const StyledH2 = styled.h2`
	font-size: 2.5vw;
	max-width: 28ch;
	margin: 20px 0px;
	color: ${({ theme }) => theme.primary};
	@media (max-width: 768opx) {
		font-size: 1.2rem;
	}
`
const StyledH3 = styled.h3`
	font-size: 0.9rem;
	max-width: 70%;
	margin: 20px 0px;
	@media (max-width: 768opx) {
	}
`
const StyledH4 = styled.h4`
	font-size: 0.8rem;
	max-width: 70%;
	@media (max-width: 768opx) {
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
			{data && (
				<Wrapper>
					<StyledDiv>
						<StyledH2>
							{lang
								? data.mainTitle.sv
								: data.mainTitle.en}
						</StyledH2>
						<StyledH3>
							{lang ? data.subTitle.sv : data.subTitle.en}
						</StyledH3>
						<StyledH4>
							{data?.subTitleTwo
								? lang
									? data.subTitleTwo.sv
									: data.subTitleTwo.en
								: null}
						</StyledH4>
					</StyledDiv>
					<StyledImg src={data.imageURL} alt='Laptop computer' />
				</Wrapper>
			)}
		</>
	)
}

export default Measure
