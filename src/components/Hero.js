import React, { useState, useEffect, useContext } from 'react'
import styled from 'styled-components'
import sanityClient from '../client'
import { motion } from 'framer-motion'
import { IoMdArrowRoundForward } from 'react-icons/io'
import { LanguageContext } from '../App'

const Wrapper = styled(motion.section)`
	height: 90vh;
	width: 100vw;
	display: flex;
	align-items: center;
	flex-direction: row;
	position: relative;
	justify-content: center;

	@media (max-width: 768px) {
		padding: 0px;
		flex-direction: column;
	}
`

const StyledDiv = styled.div`
	width: 50%;
	display: flex;
	justify-content: center;
	flex-direction: column;
	padding-left: 70px;

	@media (max-width: 768px) {
		width: 100vw;
		justify-content: flex-start;
		padding-left: 20px;
		position: absolute;
		z-index: 1;
	}
`

const StyledDiv2 = styled.div`
	width: 50%;
	display: flex;
	justify-content: center;
	align-items: center;
	flex-direction: column;
	padding-right: 70px;
	position: relative;
	@media (max-width: 768px) {
		width: 100vw;
		padding-right: 0px;
		padding-top: 50px;
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
		margin-top: -50px;
		padding-right: 0px;
	}
`

const StyledH2 = styled(motion.h2)`
	font-weight: 500;
	max-width: 90%;
	font-size: 1.5vw;
	margin-top: 20px;
	color: ${(props) => props.theme.color};
	@media (max-width: 768px) {
		width: 100vw;
		font-size: 1rem;
	}
`
const StyledH2b = styled(motion.h2)`
	font-weight: 500;
	max-width: 90%;
	font-size: 1vw;
	margin-top: 20px;
	color: ${(props) => props.theme.color};
	@media (max-width: 768px) {
		width: 100vw;
		font-size: 0.8rem;
	}
`

const StyledImg = styled(motion.img)`
	position: relative;
	width: 700px;
	@media (max-width: 768px) {
		width: 100vw;
		position: absolute;
		padding-top: 220px;
		padding-left: 150px;
	}
`
const StyledArrow = styled(IoMdArrowRoundForward)``

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

const StyledButton2 = styled.button`
	width: 150px;
	height: 42.29px;
	background-color: ${(props) => props.theme.primary};
	color: ${(props) => props.theme.btnborderColor};
	border: 1px solid ${(props) => props.theme.btnborderColor};
	border-radius: 30px;
	border: none;

	letter-spacing: 2px;
	display: flex;
	align-items: center;
	justify-content: space-evenly;
	cursor: pointer;
	padding: 15px 18px;
	font-size: 0.7rem;

	a {
		text-decoration: none;
		color: white;
	}

	@media (max-width: 768px) {
	}
`

const StyledDownloadDiv = styled.div`
	position: absolute;
	bottom: 20px;
	left: 250px;
	display: flex;
	align-items: center;
	* {
		margin: 0 5px;
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
                subTitleTwo,
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
				<StyledH2b
					initial={'hidden'}
					animate={'visible'}
					variants={variants2}
					transition={'{ duration: 1 }'}
				>
					{data
						? lang
							? data.subTitleTwo.sv && data.subTitleTwo.sv
							: data.subTitleTwo.en && data.subTitleTwo.en
						: null}
				</StyledH2b>

				<StyledButton
					initial={'initial'}
					whileTap={'animate'}
					variants={variantsBtn}
					transition={'transition'}
					onClick={() =>
						setTimeout(
							() =>
								myRef.current.scrollIntoView({
									behavior: 'smooth',
								}),
							500
						)
					}
				>
					{lang ? 'LÄS MER' : 'LEARN MORE'}
					<StyledArrow size={20} />
				</StyledButton>
				<StyledDownloadDiv>
					<a href='https://apps.apple.com/se/app/zittron/id1549633030?l=en'>
						<img
							src='https://ik.imagekit.io/lct7da3kd6o/Zittron/tr:w-120/apple_2x_u-Ff_4ztY.png?updatedAt=1629721705118'
							alt='apple download'
							width='120'
							style={{ cursor: 'pointer' }}
						/>
					</a>
					<a href='https://play.google.com/store/apps/details?id=com.zittron.zittronemployee'>
						<img
							src='https://ik.imagekit.io/lct7da3kd6o/Zittron/tr:w-150/google_2x_e5Et7nh6N.png?updatedAt=1629721705186'
							alt='google download'
							width='150'
							style={{ cursor: 'pointer' }}
						/>
					</a>
					<StyledButton2>
						<a href='https://primemanager.zittron.com/'>
							{lang ? 'LOGGA IN' : 'CUSTOMER LOG IN'}
						</a>
					</StyledButton2>
				</StyledDownloadDiv>
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
				{/* <video autoPlay loop muted>
					<source
						src='https://ik.imagekit.io/lct7da3kd6o/Zittron/WhatsApp_Video_2021-08-19_at_10.49.28_CTtr5XOqmM.mp4'
						type='video/mp4'
					/>
				</video> */}
			</StyledDiv2>
		</Wrapper>
	)
}

export default Hero
