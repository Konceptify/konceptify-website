import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import { motion } from 'framer-motion'
import SkeletonText from './SkeletonText'
import sanityClient from '../client'

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

const StyledDivDesign = styled.div`
	width: 40%;
	height: 85%;
	border-radius: 50px 50px 0 0;
	background: ${({ theme }) => theme.primary};
	display: flex;

	justify-content: center;
	align-self: flex-end;
	flex-direction: column;
	align-items: center;
	position: relative;
	box-shadow: 10px 10px 0px #cbcbcb;
	@media (max-width: 768px) {
		width: 100%;
		margin-top: 20px;
	}
`

const StyledDiv = styled.div`
	height: 95%;
	width: 90%;
	background: #fffdf5;
	text-align: center;
	border-radius: 50px 50px 0 0;
	position: absolute;
	bottom: 0;
`

const StyledH4 = styled.h4`
	margin-top: 20px;
	font-size: 2rem;
	color: ${({ theme }) => theme.primary80};
	@media (max-width: 768px) {
		font-size: 1rem;
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
	color: ${({ theme }) => theme.white};
`

const Compliance = () => {
	const [data, setData] = useState()

	useEffect(() => {
		sanityClient
			.fetch(
				`*[_type == "complianceTab"] {
                header,
				subHeader,
				
				
            }`
			)
			.then((data) => {
				const { header, subHeader } = data[0]
				setData({
					header:
						window.navigator.language === 'sv' && 'sv-SE'
							? header.sv
							: header.en,
					subHeader:
						window.navigator.language === 'sv' && 'sv-SE'
							? subHeader.sv
							: subHeader.en,
				})
			})
			.catch((error) => console.log(error))
	}, [])

	return (
		<Wrapper>
			<StyledHeaderDiv>
				<StyledH2>{data && data.header}</StyledH2>
				<StyledH3>{data && data.subHeader}</StyledH3>
			</StyledHeaderDiv>
			<StyledDivDesign>
				<StyledDiv>
					<StyledH4>Todays checklist</StyledH4>
					<SkeletonText />
					<SkeletonText />
					<SkeletonText />
					<SkeletonText />
				</StyledDiv>
			</StyledDivDesign>
		</Wrapper>
	)
}

export default Compliance
