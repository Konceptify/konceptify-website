import React, { useState, useEffect, useContext } from 'react'
import styled from 'styled-components'
import { motion } from 'framer-motion'
import sanityClient from '../client'
import { LanguageContext } from '../App'

const Wrapper = styled(motion.div)`
	height: 100%;
	width: 100%;
	display: flex;
	overflow: hidden;
	padding: 0px 50px;
	align-items: center;
	justify-content: space-between;
	@media (max-width: 768px) {
		flex-direction: column;
	}
`

const StyledImg = styled.img`
	width: 95%;
`

const StyledDivDesign = styled.div`
	width: 40%;
	height: 85%;
	border-radius: 50px 50px 0 0;

	display: flex;

	justify-content: center;

	flex-direction: column;
	align-items: center;
	position: relative;

	@media (max-width: 768px) {
		width: 90%;
		margin-top: 20px;
	}
`

const StyledHeaderDiv = styled.div`
	width: 50%;
	@media (max-width: 768px) {
		width: 100%;
	}
`

const StyledH2 = styled.h2`
	font-size: 3rem;
	color: ${({ theme }) => theme.white};
	margin-top: -20px;

	@media (max-width: 768px) {
		font-size: 1.5rem;
		margin-top: 20px;
	}
`

const StyledH3 = styled.h3`
	font-size: 1rem;
	margin-top: 20px;
	color: ${({ theme }) => theme.whiteOf};
`

const Compliance = () => {
	const [data, setData] = useState()
	const { lang } = useContext(LanguageContext)

	useEffect(() => {
		sanityClient
			.fetch(
				`*[_type == "complianceTab"] {
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
			<StyledHeaderDiv>
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
			</StyledHeaderDiv>
			<StyledDivDesign>
				<StyledImg
					src='https://ik.imagekit.io/lct7da3kd6o/Zittron/tr:w-1500/checklist_NgupaGaA8F3.png?updatedAt=1630049500106'
					alt='checklist'
				/>
			</StyledDivDesign>
		</Wrapper>
	)
}

export default Compliance
