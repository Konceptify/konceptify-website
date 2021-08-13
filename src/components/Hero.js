import React, { useState, useEffect, useContext } from 'react'
import styled from 'styled-components'
import sanityClient from '../client'
import { motion } from 'framer-motion'
import { IoMdArrowRoundForward } from 'react-icons/io'
import { LanguageContext } from '../App'

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

const StyledDiv = styled.header`
	width: 50%;
	display: flex;
	justify-content: center;
	flex-direction: column;
	padding-left: 70px;
`

const StyledDiv2 = styled.header`
	width: 50%;
	display: flex;
	justify-content: center;
	align-items: center;
	flex-direction: column;
	padding-right: 70px;
	position: relative;
`

const StyledH1 = styled(motion.h1)`
	font-size: 3.5vw;
	width: 18ch;
	color: ${(props) => props.theme.color};
	letter-spacing: -1px;
	@media (max-width: 768px) {
		width: 90vw;
		font-size: 2rem;
		margin-top: -50px;
	}
`

const StyledArrow = styled(IoMdArrowRoundForward)``

const StyledH2 = styled(motion.h2)`
	font-weight: 500;
	margin-top: 20px;
	color: ${(props) => props.theme.color};
`

const StyledImg = styled(motion.img)`
	position: relative;
	width: 700px;
	@media (max-width: 768px) {
		margin-top: 500px;
		width: 400px;
	}
`

const StyledButton = styled.button`
	width: 150px;
	height: 42.29px;
	background-color: ${(props) => props.theme.primary};
	color: ${(props) => props.theme.btnborderColor};
	border: 1px solid ${(props) => props.theme.btnborderColor};
	border-radius: 30px;
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
	const { lang } = useContext(LanguageContext)

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
				image
            }`
			)
			.then((data) => {
				setData(data[0])
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
					{data
						? lang
							? data.mainTitle.sv
							: data.mainTitle.en
						: null}
				</StyledH1>

				<StyledH2
					initial={'hidden'}
					animate={'visible'}
					variants={variants2}
					transition={'{ duration: 1 }'}
				>
					{data
						? lang
							? data.subTitle.sv
							: data.subTitle.en
						: null}
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
			<StyledDiv2>
				<StyledImg
					initial={'hidden'}
					animate={'visible'}
					variants={variants3}
					transition={{ duration: 1.5 }}
					src='https://ik.imagekit.io/lct7da3kd6o/Zittron/tr:w-2000/Resurs_1_2x_C8eKJrZMy.png?updatedAt=1628846766012'
					alt='hero image'
				/>
			</StyledDiv2>
		</Wrapper>
	)
}

export default Hero
