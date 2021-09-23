import React, { useState, useEffect, useContext } from 'react'
import styled from 'styled-components'
import sanityClient from '../client'
import { motion } from 'framer-motion'
import { IoMdArrowRoundForward } from 'react-icons/io'
import { LanguageContext } from '../App'
import Button from './Button'
import Spinner from './Spinner'

const Wrapper = styled(motion.section)`
	height: 90vh;
	width: 100vw;
	display: flex;
	align-items: center;
	flex-direction: row;
	position: relative;
	justify-content: center;

	@media (max-width: 900px) {
		padding: 100px 0 0 0px;
		height: 75vh;
		flex-direction: column;
		justify-content: flex-start;
		margin-bottom: 60px;
	}
`

const StyledDiv = styled.div`
	width: 50%;
	display: flex;
	justify-content: center;
	flex-direction: column;
	padding-left: 70px;

	button {
		position: relative;
		z-index: 1;
	}

	@media (max-width: 900px) {
		width: 100vw;
		justify-content: flex-start;
		padding-left: 20px;
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

	video {
		background: white;
	}
	@media (max-width: 900px) {
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
	@media (max-width: 900px) {
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
	@media (max-width: 900px) {
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
	@media (max-width: 900px) {
		width: 100vw;
		font-size: 0.8rem;
	}
`

const StyledImg = styled(motion.img)`
	position: relative;
	margin-top: 80px;
	right: 8vw;
	width: 35vw;

	@media (min-width: 500px) and (max-width: 900px) {
		width: 50vw;
		position: absolute;
		z-index: -1;
	}

	@media (max-width: 500px) {
		width: 100vw;
		position: absolute;
		margin-top: 50px;
		padding-left: 150px;
	}
	@media (max-width: 1900px) {
		margin-left: 240px;
	}
`
const StyledArrow = styled(IoMdArrowRoundForward)``

const StyledDownloadDiv = styled.div`
	display: flex;
	align-items: center;
	justify-content: center;

	position: absolute;
	bottom: 0px;

	button {
		margin-left: 20px;
		margin-bottom: 2px;
	}

	@media (max-width: 768px) {
		bottom: 0px;
		width: 100%;
		margin: 0;
		padding-right: 30px;
		justify-content: space-evenly;

		button {
			display: none;
		}
	}
`

const StyledApple = styled.img`
	height: 42px;

	@media (max-width: 600px) {
	}
`
const StyledGoogle = styled.img`
	height: 60px;
	@media (max-width: 600px) {
	}
`

const Hero = () => {
	const [data, setData] = useState(null)
	const { lang, myRef } = useContext(LanguageContext)

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
					{data ? (
						lang ? (
							data.mainTitle.sv
						) : (
							data.mainTitle.en
						)
					) : (
						<Spinner />
					)}
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
					{data ? (
						lang ? (
							data.subTitleTwo.sv && data.subTitleTwo.sv
						) : (
							data.subTitleTwo.en && data.subTitleTwo.en
						)
					) : (
						<Spinner />
					)}
				</StyledH2b>

				<Button
					initial={'initial'}
					whileTap={'animate'}
					variants={variantsBtn}
					transition={'transition'}
					handleClick={() => myRef.current.scrollIntoView()}
				>
					{lang ? 'LÄS MER' : 'LEARN MORE'}

					<StyledArrow size={20} />
				</Button>

				<StyledDownloadDiv>
					{lang ? (
						<a href='https://apps.apple.com/us/app/zittron/id1549633030?itsct=apps_box_badge&amp;itscg=30200'>
							<StyledApple
								src='https://tools.applemediaservices.com/api/badges/download-on-the-app-store/black/sv-se&amp;releaseDate=1611360000&h=03597dc481a5892f8dba29a574a3d59d'
								alt='Download on the App Store'
							/>
						</a>
					) : (
						<a href='https://apps.apple.com/us/app/zittron/id1549633030?itsct=apps_box_badge&amp;itscg=30200'>
							<StyledApple
								src='https://tools.applemediaservices.com/api/badges/download-on-the-app-store/black/en-us&amp;releaseDate=1611360000&h=c29f17b16336b66f6e948b5ba0444e68'
								alt='Download on the App Store'
							/>
						</a>
					)}
					{lang ? (
						<a href='https://play.google.com/store/apps/details?id=com.zittron.zittronemployee&hl=sv&gl=US&pcampaignid=pcampaignidMKT-Other-global-all-co-prtnr-py-PartBadge-Mar2515-1'>
							<StyledGoogle
								alt='Ladda ned på Google Play'
								src='https://play.google.com/intl/en_us/badges/static/images/badges/sv_badge_web_generic.png'
							/>
						</a>
					) : (
						<a href='https://play.google.com/store/apps/details?id=com.zittron.zittronemployee&hl=sv&gl=US&pcampaignid=pcampaignidMKT-Other-global-all-co-prtnr-py-PartBadge-Mar2515-1'>
							<StyledGoogle
								alt='Get it on Google Play'
								src='https://play.google.com/intl/en_us/badges/static/images/badges/en_badge_web_generic.png'
							/>
						</a>
					)}

					<Button>
						<a href='https://conceptmanager.zittron.com/'>
							{lang ? 'LOGGA IN' : 'SIGN IN'}
						</a>
					</Button>
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
			</StyledDiv2>
		</Wrapper>
	)
}

export default Hero
