import React from 'react'
import styled from 'styled-components'
import { motion } from 'framer-motion'
import Video1 from '../img/Order - Packning - Leverans.mov'

const Wrapper = styled(motion.div)`
	height: 60%;
	width: 100%;

	display: flex;
	flex-direction: row;
	align-items: center;
	justify-content: space-between;
	overflow: hidden;
	@media (max-width: 768px) {
		width: 100%;
		border-radius: 10px;
		margin-bottom: 30px;
	}
`

const StyledVideo = styled(motion.video)`
	width: 45%;
	z-index: 1;
	position: absolute;

	@media (max-width: 768px) {
		width: 110%;
		margin-top: 30px;
		margin-bottom: 30px;
	}
`

const VideoMockup = () => {
	return (
		<Wrapper>
			<StyledVideo
				initial={{ opacity: 0 }}
				animate={{ opacity: 1 }}
				exit={{ opacity: 0 }}
				transition={{ duration: 0.5, ease: 'easeIn' }}
				autoPlay='autoplay'
				playsInline
			>
				<source src={Video1} type='video/mp4' />
			</StyledVideo>
		</Wrapper>
	)
}

export default VideoMockup
