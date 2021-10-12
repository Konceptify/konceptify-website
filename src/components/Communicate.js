import React, { useState, useEffect, useContext } from 'react'
import styled from 'styled-components'
import sanityClient from '../client'
import { LanguageContext } from '../App'
import { motion } from 'framer-motion'

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

const StyledImg = styled(motion.img)`
	width: 35vw;
	@media (max-width: 768px) {
		width: 80vw;
		padding-top: 50px;
	}
`

const StyledDiv = styled.div`
	width: 50%;
	@media (max-width: 768px) {
		width: 100%;
	}
`

const StyledH2 = styled(motion.h2)`
	font-size: 2vw;
	color: ${({ theme }) => theme.primary};
	margin-top: -20px;
	max-width: 35ch;

	@media (max-width: 768px) {
		font-size: 1.2rem;
		margin-top: 20px;
		max-width: 100%;
		padding-left: 0px;
		padding-left: 40px;
	}
`

const StyledH3 = styled(motion.h3)`
	font-size: 0.9rem;
	width: 70%;
	margin-top: 20px;
	padding-left: 0px;
	color: ${({ theme }) => theme.primary90};
	@media (max-width: 1768px) {
		width: 100%;
		padding-left: 0px;
	}
	@media (max-width: 768px) {
		padding-left: 40px;
	}
`

const Communications = () => {
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
					src='https://ik.imagekit.io/lct7da3kd6o/Zittron/tr:w-2000/Resurs_5_08FgDgtoW.png?updatedAt=1629718921512'
					alt='chat popup'
					initial={{ opacity: 0, y: '20px' }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.7 }}
				/>
			</StyledDiv>
			<StyledDiv>
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
					transition={{ duration: 0.7 }}
				>
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

export default Communications
