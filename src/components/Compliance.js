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

const StyledImg = styled(motion.img)`
	margin-right: 140px;
	width: 35vw;

	@media (max-width: 768px) {
		margin-right: 0;
		margin-bottom: 60px;

		width: 70vw;
	}
`

const StyledDivDesign = styled.div`
	width: 50%;

	display: flex;

	justify-content: center;

	flex-direction: column;
	align-items: center;
	position: relative;

	@media (max-width: 768px) {
		width: 90%;
	}
`

const StyledHeaderDiv = styled.div`
	padding-left: 40px;
	width: 50%;
	@media (max-width: 768px) {
		width: 100%;
		padding-left: 0px;
		padding-top: 40px;
	}
`

const StyledH2 = styled(motion.h2)`
	font-size: 3rem;
	max-width: 25ch;
	color: ${({ theme }) => theme.white};
	margin-top: -20px;

	@media (max-width: 768px) {
		font-size: 1.5rem;
		margin-top: 20px;
	}
`

const StyledH3 = styled(motion.h3)`
	font-size: 1rem;
	margin-top: 20px;
	max-width: 60ch;
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
				<StyledH2
					initial={{ opacity: 0, y: '-20px' }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.7 }}
				>
					{data
						? lang
							? data.header.sv
							: data.header.en
						: null}
				</StyledH2>
				<StyledH3
					initial={{ opacity: 0, x: '-100px' }}
					animate={{ opacity: 1, x: 0 }}
					transition={{ duration: 0.5 }}
				>
					{data
						? lang
							? data.subHeader.sv
							: data.subHeader.en
						: null}
				</StyledH3>
			</StyledHeaderDiv>
			<StyledDivDesign>
				<StyledImg
					src='https://ik.imagekit.io/lct7da3kd6o/Zittron/tr:w-2000/checklist_NgupaGaA8F3.png?updatedAt=1630049500106'
					alt='checklist'
					initial={{ opacity: 0, y: '-20px' }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.7 }}
				/>
			</StyledDivDesign>
		</Wrapper>
	)
}

export default Compliance
