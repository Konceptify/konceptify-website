import React, { useState, useEffect, useContext } from 'react'
import styled from 'styled-components'
import sanityClient from '../client'
import { motion } from 'framer-motion'
import { IoMdArrowRoundForward } from 'react-icons/io'
import { LanguageContext } from '../App'
import Button from './Button'
import Spinner from './Spinner'
import { ReactComponent as BackgroundSVG } from '../assets/Vector2.svg'

const Wrapper = styled(motion.section)`
	min-height: 90vh;
	height: fit-content;
	width: 100vw;
	display: flex;
	align-items: center;
	flex-direction: row;
	position: relative;
	justify-content: center;

	@media (max-width: 900px) {
		padding: 100px 0 0 0px;

		flex-direction: column;
		justify-content: flex-start;
		margin-bottom: 60px;
	}
`

const BackgroundDiv = styled.div`
	position: absolute;
	/* 	left: -23%;
	top: -45%;
	transform: rotate(90deg); */
	display: none;

	@media (max-width: 700px) {
		display: block;
		left: -3%;
		top: -7%;
		transform: rotate(180deg);
	}
`

const StyledDiv = styled.div`
	display: flex;
	justify-content: center;
	flex-direction: column;
	padding-left: 12rem;
	position: relative;
	z-index: 999;

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

	@media (max-width: 900px) {
		width: 90vw;
		font-size: 2rem;
		margin-top: -50px;
		padding-right: 0px;
	}
`

const StyledH2 = styled(motion.h2)`
	font-weight: 200;
	max-width: 90%;
	font-size: 1.5rem;
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
	margin-top: 4rem;
	max-width: 70%;
`
const StyledArrow = styled(IoMdArrowRoundForward)``

const StyledDownloadDiv = styled.div`
	display: flex;
	align-items: center;
	justify-content: flex-start;
	padding: 1rem 4rem;

	@media (max-width: 768px) {
		bottom: 0px;
		width: 100%;
		justify-content: space-evenly;
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
		hidden: { y: '30px', opacity: 0 },
		visible: { y: 0, opacity: 1 },
	}

	return (
		<>
			<Wrapper
				initial={{ opacity: 0 }}
				animate={{ opacity: 1 }}
				exit={{ opacity: 0 }}
				transition={{ duration: 1.2 }}
			>
				<BackgroundDiv>
					<BackgroundSVG />
				</BackgroundDiv>
				<StyledDiv>
					<StyledH1
						initial={'hidden'}
						animate={'visible'}
						variants={variants}
						transition={{ duration: 0.5 }}
					>
						{data ? lang ? data.mainTitle.sv : data.mainTitle.en : <Spinner />}
					</StyledH1>

					<StyledH2
						initial={'hidden'}
						animate={'visible'}
						variants={variants2}
						transition={'{ duration: 1 }'}
					>
						{data ? (lang ? data.subTitle.sv : data.subTitle.en) : null}
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
						{lang ? 'Läs mer' : 'Read more'}

						<StyledArrow size={20} />
					</Button>
				</StyledDiv>
				<StyledDiv2>
					<StyledImg
						initial={'hidden'}
						animate={'visible'}
						variants={variants3}
						transition={{ duration: 0.9 }}
						src="https://ik.imagekit.io/lct7da3kd6o/Zittron/tr:w-2000/home_KWrD2NBPLb.png?ik-sdk-version=javascript-1.4.3&updatedAt=1643360432521"
						alt="hero image"
					/>
				</StyledDiv2>
			</Wrapper>
			<StyledDownloadDiv>
				{lang ? (
					<a href="https://apps.apple.com/us/app/zittron/id1549633030?itsct=apps_box_badge&amp;itscg=30200">
						<StyledApple
							src="https://tools.applemediaservices.com/api/badges/download-on-the-app-store/black/sv-se&amp;releaseDate=1611360000&h=03597dc481a5892f8dba29a574a3d59d"
							alt="Download on the App Store"
						/>
					</a>
				) : (
					<a href="https://apps.apple.com/us/app/zittron/id1549633030?itsct=apps_box_badge&amp;itscg=30200">
						<StyledApple
							src="https://tools.applemediaservices.com/api/badges/download-on-the-app-store/black/en-us&amp;releaseDate=1611360000&h=c29f17b16336b66f6e948b5ba0444e68"
							alt="Download on the App Store"
						/>
					</a>
				)}
				{lang ? (
					<a href="https://play.google.com/store/apps/details?id=com.zittron.zittronemployee&hl=sv&gl=US&pcampaignid=pcampaignidMKT-Other-global-all-co-prtnr-py-PartBadge-Mar2515-1">
						<StyledGoogle
							alt="Ladda ned på Google Play"
							src="https://play.google.com/intl/en_us/badges/static/images/badges/sv_badge_web_generic.png"
						/>
					</a>
				) : (
					<a href="https://play.google.com/store/apps/details?id=com.zittron.zittronemployee&hl=sv&gl=US&pcampaignid=pcampaignidMKT-Other-global-all-co-prtnr-py-PartBadge-Mar2515-1">
						<StyledGoogle
							alt="Get it on Google Play"
							src="https://play.google.com/intl/en_us/badges/static/images/badges/en_badge_web_generic.png"
						/>
					</a>
				)}

				{/* <Button>
					<a href="https://conceptmanager.zittron.com/">
						{lang ? 'LOGGA IN' : 'SIGN IN'}
					</a>
				</Button> */}
			</StyledDownloadDiv>
		</>
	)
}

export default Hero
