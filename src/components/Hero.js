import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import heroImg from '../img/heroimg.png'
import sanityClient from '../client'
import { motion } from 'framer-motion'

const Wrapper = styled.section`
	height: 100%;
	width: 100%;
	padding: 10px 120px;
	display: flex;
	align-items: center;
	position: relative;
	@media (max-width: 768px) {
		padding: 30px;
	}
`

const StyledH1 = styled(motion.h1)`
	font-size: 5vw;
	margin-top: -13rem;
	color: ${(props) => props.theme.color};
	@media (max-width: 768px) {
		font-size: 3rem;
	}
`
const StyledH2 = styled(motion.h2)`
	margin: 20px 5px;
	font-weight: 500;
	color: ${(props) => props.theme.color};
`

const StyledImg = styled(motion.img)`
	max-width: 70vw;
	margin-left: 40%;
	@media (max-width: 768px) {
		display: none;
	}
`

const StyledDiv = styled.div`
	width: 50%;
	position: absolute;
`

const StyledButton = styled.button`
	width: 150px;
	height: 42.29px;
	background-color: ${(props) => props.theme.btnBgColor};
	color: ${(props) => props.theme.btnborderColor};
	border: 1px solid ${(props) => props.theme.btnborderColor};
	border-radius: 10px;
	border: none;
	letter-spacing: 2px;
	cursor: pointer;
	@media (max-width: 768px) {
		display: none;
	}
`

const Hero = () => {
	const [data, setData] = useState(null)

	useEffect(() => {
		sanityClient
			.fetch(
				`*[_type == "heroHeadline"] {
                title
            }`
			)
			.then((data) => setData(data))
			.catch((error) => console.log(error))
	}, [])

	const variants = {
		hidden: { x: '-600px' },
		visible: { x: 0 },
	}
	const variants2 = {
		hidden: { y: '600px' },
		visible: { y: 0 },
	}
	const variants3 = {
		hidden: { y: '-1000px' },
		visible: { y: 0 },
	}

	return (
		<Wrapper>
			<StyledDiv>
				<StyledH1
					initial={'hidden'}
					animate={'visible'}
					variants={variants}
					transition={{ duration: 0.5 }}
				>
					{data && data[1].title}
				</StyledH1>
				{
					<StyledH2
						initial={'hidden'}
						animate={'visible'}
						variants={variants2}
						transition={{ duration: 1 }}
					>
						{data && data[0].title}
					</StyledH2>
				}
				<StyledButton>LEARN MORE</StyledButton>
			</StyledDiv>
			<StyledImg
				initial={'hidden'}
				animate={'visible'}
				variants={variants3}
				transition={{ duration: 1.5 }}
				src={heroImg}
				alt='hero'
			/>
		</Wrapper>
	)
}

export default Hero
