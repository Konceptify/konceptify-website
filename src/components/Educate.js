import React from 'react'
import styled from 'styled-components'
import VideoMockup from './VideoMockup'
import { motion } from 'framer-motion'

const Wrapper = styled(motion.div)`
	height: 100%;
	width: 100%;
	display: flex;
	overflow: hidden;
	padding: 0px 40px;
	align-items: center;
	justify-content: space-around;
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
`

const StyledH2 = styled.h2`
	font-size: 3rem;
	width: 80%;
	color: ${({ theme }) => theme.white};
	margin-top: -20px;
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
	margin-top: 20px;
	color: ${({ theme }) => theme.white};
	text-align: center;
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
`

const StyledDiv = styled.div`
	height: 100%;
	width: 50%;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
`

const Educate = ({ conceptSlide }) => {
	return (
		<Wrapper
			initial={{ x: '-200px' }}
			animate={{ x: 0 }}
			transition={{ duration: 0.05 }}
		>
			<StyledDivDesign>
				<StyledH2>
					Train your staff with short videos for better learning
				</StyledH2>
				<StyledH3>
					Beacuse we all know that long paper manuals really does
					not work right?
				</StyledH3>
				<StyledDivCircle>
					LEARN BETTER WITH SHORT VIDEOS
				</StyledDivCircle>
			</StyledDivDesign>
			<StyledDiv>
				<VideoMockup />
				<StyledH3b>
					Need help with content creating? Choose our content
					plan
				</StyledH3b>
			</StyledDiv>
		</Wrapper>
	)
}

export default Educate
