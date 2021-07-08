import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import heroImg from '../img/heroimg.png'
import sanityClient from '../client'
import { motion } from 'framer-motion'
import { IoMdArrowRoundForward } from 'react-icons/io'

const Wrapper = styled(motion.section)`
	height: 90vh;
	width: 100%;
	display: flex;

	align-items: center;
	flex-direction: row;
	position: relative;
	justify-content: center;
	@media (max-width: 768px) {
		padding: 20px;
	}
`

const StyledH1 = styled(motion.h1)`
	font-size: 3.5vw;
	width: 18ch;
	color: ${(props) => props.theme.color};
	letter-spacing: -1px;
	@media (max-width: 768px) {
		width: 90vw;
		font-size: 2rem;
	}
`

const StyledArrow = styled(IoMdArrowRoundForward)``

const StyledH2 = styled(motion.h2)`
	font-weight: 500;
	margin-top: 20px;
	color: ${(props) => props.theme.color};
`

const StyledImg = styled(motion.img)`
	@media (max-width: 768px) {
		position: absolute;
		top: 0;
		right: 0;
		max-width: 100%;
		opacity: 0.5;
	}
`

const StyledDiv = styled.header`
	padding: 70px 0px;
`

const StyledButton = styled.button`
	width: 150px;
	height: 42.29px;
	background-color: ${(props) => props.theme.primary};
	color: ${(props) => props.theme.btnborderColor};
	border: 1px solid ${(props) => props.theme.btnborderColor};
	border-radius: 10px;
	border: none;
	margin-top: 20px;
	letter-spacing: 2px;
	display: flex;
	align-items: center;
	justify-content: space-evenly;
	cursor: pointer;
	padding: 15px 18px;
	font-size: 0.7rem;

	svg {
		fill: ${({ theme }) => theme.btnborderColor};
		size: 40;
		padding-bottom: 2px;
		transform: rotate(0deg);
		transition-duration: 0.5s;
	}

	:hover {
		svg {
			transform: rotate(90deg);
			transition-duration: 0.5s;
		}
	}

	@media (max-width: 768px) {
	}
`

const Hero = ({ myRef }) => {
	const [data, setData] = useState(null)

	const variantsBtn = {
		initial: {
			rotate: '0deg',
		},
		animate: {
			rotate: '45deg',
		},
		transition: {
			duration: 1,
		},
	}

	useEffect(() => {
		sanityClient
			.fetch(
				`*[_type == "mainHeader"] {
                subTitle,
				mainTitle,
            }`
			)
			.then((data) => {
				setData(
					window.navigator.language === 'sv'
						? [data[0].mainTitle.sv, data[0].subTitle.sv]
						: [data[0].mainTitle.en, data[0].subTitle.en]
				)
			})
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
		<Wrapper
			initial={{ opacity: 0 }}
			animate={{ opacity: 1 }}
			exit={{ opacity: 0 }}
			transition={{ duration: 1.2 }}
		>
			<StyledDiv>
				<StyledH1
					initial={'hidden'}
					animate={'visible'}
					variants={variants}
					transition={{ duration: 0.5 }}
				>
					{data && data[0]}
				</StyledH1>

				<StyledH2
					initial={'hidden'}
					animate={'visible'}
					variants={variants2}
					transition={'{ duration: 1 }'}
				>
					{data && data[1]}
				</StyledH2>

				<StyledButton
					initial={'initial'}
					whileTap={'animate'}
					variants={variantsBtn}
					transition={'transition'}
					onClick={() =>
						setTimeout(
							() => myRef.current.scrollIntoView(),
							500
						)
					}
				>
					{window.navigator.language === 'sv-SE' || 'sv'
						? 'LÄS MER'
						: 'LEARN MORE'}
					<StyledArrow size={20} />
				</StyledButton>
			</StyledDiv>
			<StyledDiv>
				<StyledImg
					initial={'hidden'}
					animate={'visible'}
					variants={variants3}
					transition={{ duration: 1.5 }}
					src={heroImg}
					alt='hero'
					width='500'
				/>
			</StyledDiv>
		</Wrapper>
	)
}

export default Hero
