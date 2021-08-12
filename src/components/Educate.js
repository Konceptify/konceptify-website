import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import VideoMockup from './VideoMockup'
import { motion } from 'framer-motion'
import sanityClient from '../client'

const Wrapper = styled(motion.div)`
	height: 100%;
	width: 100%;
	display: flex;
	overflow: hidden;
	padding: 0px 40px;
	align-items: center;
	justify-content: space-around;
	@media (max-width: 768px) {
		flex-direction: column;
		padding: 0px;
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
		border-radius: 0px;
		box-shadow: none;
		background: inherit;
	}
`

const StyledH2 = styled.h2`
	font-size: 3rem;
	width: 80%;
	color: ${({ theme }) => theme.white};
	margin-top: -20px;
	@media (max-width: 768px) {
		margin-top: 20px;
		font-size: 1.5rem;
	}
`
const StyledH3 = styled.h3`
	width: 80%;
	font-size: 1rem;
	margin-top: 20px;
	color: ${({ theme }) => theme.white};
`
const StyledH3b = styled.h3`
	width: 80%;
	font-size: 1rem;
	margin-top: 40px;
	color: ${({ theme }) => theme.white};
	text-align: center;
	@media (max-width: 768px) {
		margin-bottom: 40px;
	}
`

const StyledDivCircle = styled.div`
	position: absolute;
	right: 50px;
	top: -65px;
	z-index: 1;
	width: 130px;
	height: 130px;
	text-align: center;
	border-radius: 50%;
	display: flex;
	justify-content: center;
	align-items: center;
	background: #ffd600;
	color: ${({ theme }) => theme.white};
	font-weight: 700;
	p {
		font-size: 0.9rem;
		width: 11ch;
	}

	@media (max-width: 768px) {
		display: none;
	}
`

const StyledDiv = styled.div`
	height: 100%;
	width: 50%;
	margin-top: 60px;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	@media (max-width: 768px) {
		width: 100%;
	}
`

const Educate = ({ conceptSlide }) => {
	const [data, setData] = useState()

	useEffect(() => {
		sanityClient
			.fetch(
				`*[_type == "educateTab"] {
                header,
				subHeader,
				underVideo,
				banner
				
            }`
			)
			.then((data) => {
				const { header, subHeader, underVideo, banner } = data[0]
				setData({
					header:
						window.navigator.language === 'sv' && 'sv-SE'
							? header.sv
							: header.en,
					subHeader:
						window.navigator.language === 'sv' && 'sv-SE'
							? subHeader.sv
							: subHeader.en,
					underVideo:
						window.navigator.language === 'sv' && 'sv-SE'
							? underVideo.sv
							: underVideo.en,
					banner:
						window.navigator.language === 'sv' && 'sv-SE'
							? banner.sv
							: banner.en,
				})
			})
			.catch((error) => console.log(error))
	}, [])

	return (
		<Wrapper
			initial={{ x: '-200px' }}
			animate={{ x: 0 }}
			transition={{ duration: 0.05 }}
		>
			<StyledDivDesign>
				<StyledH2>{data && data.header}</StyledH2>
				<StyledH3>{data && data.subHeader}</StyledH3>
				<StyledDivCircle>
					<p>{data && data.banner}</p>
				</StyledDivCircle>
			</StyledDivDesign>
			<StyledDiv>
				<VideoMockup />
				<StyledH3b>{data && data.underVideo}</StyledH3b>
			</StyledDiv>
		</Wrapper>
	)
}

export default Educate