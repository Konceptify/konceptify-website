import React, { useState } from 'react'
import styled from 'styled-components'
import { motion } from 'framer-motion'
import Video1 from '../img/Order - Packning - Leverans.mov'
import Video2 from '../img/Handfat - Desinfektionsmedel.mov'

const Wrapper = styled(motion.div)`
	height: 60%;
	width: 100%;

	border-radius: 50px;
	display: flex;
	flex-direction: row;
	align-items: center;
	justify-content: space-between;
	overflow: hidden;
`

const Next = styled.div`
	width: 30px;
	height: 30px;
	margin-right: 25px;
	display: flex;
	justify-content: center;
	align-items: center;
	background: #000;
	border-radius: 50%;
	position: relative;
	z-index: 2;
	cursor: pointer;
`
const Previous = styled.div`
	width: 30px;
	height: 30px;
	margin-left: 5px;
	display: flex;
	justify-content: center;
	align-items: center;
	background: #000;
	border-radius: 50%;
	position: relative;
	z-index: 2;
	cursor: pointer;
`

const PreviousArrow = styled.div`
	width: 0;
	height: 0;
	border-top: 6px solid transparent;
	border-bottom: 6px solid transparent;
	border-right: 6px solid white;
`
const NextArrow = styled.div`
	width: 0;
	height: 0;
	border-top: 6px solid transparent;
	border-bottom: 6px solid transparent;
	border-left: 6px solid white;
`

const StyledVideo = styled(motion.video)`
	width: 45%;
	z-index: 1;
	position: absolute;
	border-radius: 50px;
`
const StyledVideo2 = styled(motion.video)`
	width: 45%;
	z-index: 1;
	position: absolute;
	border-radius: 50px;
`

const VideoMockup = () => {
	const [nextVideo, setNextVideo] = useState(true)

	return (
		<Wrapper>
			<Previous
				onClick={() => {
					setNextVideo(true)
				}}
			>
				<PreviousArrow />
			</Previous>
			{nextVideo ? (
				<StyledVideo
					initial={{ opacity: 0 }}
					animate={{ opacity: 1 }}
					exit={{ opacity: 0 }}
					transition={{ duration: 0.5, ease: 'easeIn' }}
					autoPlay='autoplay'
					loop='loop'
				>
					<source src={Video1} type='video/mp4' />
				</StyledVideo>
			) : (
				<StyledVideo2
					initial={{ opacity: 0 }}
					animate={{ opacity: 1 }}
					exit={{ opacity: 0 }}
					transition={{ duration: 0.5, ease: 'easeIn' }}
					autoPlay='autoplay'
					loop='loop'
				>
					<source src={Video2} type='video/mp4' />
				</StyledVideo2>
			)}
			<Next onClick={() => setNextVideo(false)}>
				<NextArrow />
			</Next>
		</Wrapper>
	)
}

export default VideoMockup
