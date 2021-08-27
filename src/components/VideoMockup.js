import React, { useState } from 'react'
import styled from 'styled-components'
import { motion } from 'framer-motion'
import sanityClient from '../client'
import { useEffect } from 'react'

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
	const [data, setData] = useState()

	useEffect(() => {
		sanityClient
			.fetch(
				`*[_type == "educateTab"] {
                video,
				"videoURL": video.asset->url,
				
				
            }`
			)
			.then((data) => {
				setData(data[0])
			})
			.catch((error) => console.log(error))
	}, [])

	console.log(data?.videoURL && data.videoURL)

	return (
		<>
			{data ? (
				<Wrapper>
					<StyledVideo
						initial={{ opacity: 0 }}
						animate={{ opacity: 1 }}
						exit={{ opacity: 0 }}
						transition={{ duration: 0.5, ease: 'easeIn' }}
						autoPlay='autoplay'
						loop
						playsInline
					>
						<source src={data.videoURL} type='video/mp4' />
					</StyledVideo>
				</Wrapper>
			) : null}
		</>
	)
}

export default VideoMockup
