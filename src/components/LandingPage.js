import React, { useState, useEffect, useContext } from 'react'
import styled from 'styled-components'

import Communicate from '../components/Communicate'
import Educate from '../components/Educate'
import Compliance from '../components/Compliance'
/* import Testemonials from '../components/Testemonials' */
import Contact from '../pages/Contact'
import sanityClient from '../client'
import Video from '../img/animated-video.mp4'
import { LanguageContext } from '../App'

const Wrapper = styled.section`
	width: 100vw;
	background-color: #fff;

	@media (max-width: 976px) {
		padding-top: 80px;
	}
`

const StyledDiv1 = styled.div`
	height: 100%;
	width: 50%;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	text-align: center;
	@media (max-width: 976px) {
		width: 100%;

		padding-top: 30px;
	}
`

const StyledDiv2 = styled.div`
	height: 100%;
	width: 50%;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	position: relative;
	z-index: 3000;
	text-align: center;
	@media (max-width: 976px) {
		width: 100%;

		padding-top: 30px;
	}
`

const StyledH2 = styled.h2`
	font-size: 4rem;
	width: 100%;
	position: relative;
	z-index: 10;
	color: ${({ theme }) => theme.color};
	@media (max-width: 976px) {
		font-size: 1.7rem;
		margin-bottom: 30px;
	}
`
const StyledH3 = styled.h3`
	width: 80%;
	font-size: 1rem;
	margin-top: 20px;
	font-weight: 500;
	position: relative;
	z-index: 10;
	@media (max-width: 976px) {
		width: 100%;
		text-align: left;
		margin-bottom: -150px;
	}
`

const StyledDivDesign = styled.div`
	position: relative;
	/* background: ${({ theme }) => theme.primary60}; */
	display: flex;
	justify-content: center;

	align-items: center;

	z-index: 100;
	video {
		width: 60vw;
	}

	@media (max-width: 976px) {
		width: 100%;

		margin-bottom: 0px;
		video {
			width: 200vw;
			margin-left: 130px;
		}
	}
`

const StyledH4 = styled.h4`
	text-align: center;
	display: none;
	color: ${({ theme }) => theme.color};
	font-weight: 300;
	padding: 10px 20px;
	position: absolute;
	z-index: 2;
	bottom: 10px;
	font-size: 1rem;
	width: 100%;

	@media (max-width: 976px) {
		width: 100%;
		font-size: 0.8rem;
		background: inherit;
		color: ${({ theme }) => theme.primary90};
		padding: 0px;
		display: block;
	}
`

/* const StyledImg = styled.img`
	width: 45vw;
	display: none;
	@media (max-width: 976px) {
		width: 90vw;
		display: block;
		margin-bottom: 100px;
	}
` */

const StyledConceptDiv = styled.div`
	height: 90vh;
	background: ${({ theme, conceptSlide }) =>
		conceptSlide === 'Compliance'
			? theme.primary90
			: conceptSlide === 'E-learning'
			? theme.primary70
			: '#f1f1f1'};
	width: 100%;
	display: flex;
	justify-content: center;
	align-items: center;
	border-radius: 0 0 50px 50px;
	margin-bottom: 20px;
	transition: all 0.5s linear;
	@media (max-width: 976px) {
		width: 130%;
		border-radius: 0px;
	}
`

const StyledSlideContainer = styled.div`
	height: 10%;
	width: 100%;
	display: flex;
	align-items: flex-end;
	justify-content: center;
	padding-bottom: 10px;
`

const StyledSlider = styled.div`
	width: 90%;
	background: #f1f1f1;
	height: 40px;
	position: relative;
	z-index: 1;
	border-radius: 30px;
	display: flex;
	justify-content: space-between;
	align-items: center;
	@media (max-width: 976px) {
		width: 100%;
	}
`

const ComplianceSlide = styled.div`
	cursor: pointer;
	background: ${({ theme, conceptSlide }) =>
		conceptSlide === 'Compliance' ? theme.primary60 : 'transparent'};
	color: ${({ theme, conceptSlide }) =>
		conceptSlide === 'Compliance' ? 'white' : theme.primary60};

	border-radius: 30px;
	width: 33%;
	height: 100%;
	display: flex;
	justify-content: center;
	align-items: center;
	@media (max-width: 976px) {
		font-size: 0.6rem;
		padding: 8px 0;
	}
`
const EducateSlide = styled.div`
	border-radius: 30px;
	width: 33%;
	height: 100%;
	display: flex;
	justify-content: center;
	align-items: center;
	cursor: pointer;
	background: ${({ theme, conceptSlide }) =>
		conceptSlide === 'E-learning' ? theme.primary60 : 'transparent'};
	color: ${({ theme, conceptSlide }) =>
		conceptSlide === 'E-learning' ? 'white' : theme.primary60};
	@media (max-width: 976px) {
		font-size: 0.7rem;
	}
`
const CommunicateSlide = styled.div`
	border-radius: 30px;
	width: 33%;
	height: 100%;
	display: flex;
	justify-content: center;
	align-items: center;
	cursor: pointer;
	background: ${({ theme, conceptSlide }) =>
		conceptSlide === 'Communicate' ? theme.primary60 : 'transparent'};
	color: ${({ theme, conceptSlide }) =>
		conceptSlide === 'Communicate' ? 'white' : theme.primary60};
	@media (max-width: 976px) {
		font-size: 0.7rem;
	}
`

const StyledSection = styled.section`
	background-color: ${({ bg }) => bg};
	width: 100vw;
	height: 100vh;
	display: flex;
	flex-direction: ${({ direction }) => direction};
	overflow: hidden;
	padding: 0 40px;

	@media (max-width: 976px) {
		width: 100vw;
		height: 120vh;
		flex-direction: column-reverse;
	}
`

const StyledSection2 = styled(StyledSection)`
	width: 100vw;
	margin-top: 50px;

	display: flex;
	align-items: center;
	flex-direction: column;
`

const CardContainer = styled.div`
	display: flex;
	position: relative;
	z-index: 10;
`

const StyledCard = styled.div`
	width: 130px;
	height: 90px;
	display: flex;
	justify-content: center;
	align-items: center;
	margin: 20px 10px;
	border-radius: 20px;
	cursor: pointer;
	color: ${({ theme }) => theme.white};
	background-color: ${({ theme }) => theme.primary};
	box-shadow: 2px 2px 0px ${({ theme }) => theme.primary70};

	@media (max-width: 976px) {
		width: 100px;
		height: 45px;
		padding: 20px 20px;
		font-size: 0.7rem;
	}

	:hover {
		transform: scale(1.1);
	}
`

const LandingPage = ({ myRef }) => {
	const { lang, sliderRef, conceptSlide, setConceptSlide } =
		useContext(LanguageContext)

	const [data, setData] = useState()

	useEffect(() => {
		sanityClient
			.fetch(
				`*[_type == "conceptOverview"] {
                header,
				subHeader,
				underImage,
				
				
            }`
			)
			.then((data) => {
				const { header, subHeader, underImage } = data[0]
				setData({
					header: header,
					subHeader: subHeader,
					underImage: underImage,
				})
			})
			.catch((error) => console.log(error))
	}, [])

	return (
		<>
			<Wrapper ref={myRef}>
				<StyledSection direction='row' bg='#fff'>
					<StyledDiv1>
						<StyledDivDesign>
							{data && (
								<>
									{/* <StyledImg src='https://ik.imagekit.io/lct7da3kd6o/Zittron/tr:w-1500/Resurs_2_4x-8__xPkNywNB.png?updatedAt=1628848469943' /> */}
									<video
										autoPlay
										loop
										muted
										playsInline
									>
										<source
											src={Video}
											type='video/mp4'
										/>
									</video>
								</>
							)}

							<StyledH4>
								{lang
									? data && data.underImage.sv
									: data && data.underImage.en}
							</StyledH4>
						</StyledDivDesign>
					</StyledDiv1>
					<StyledDiv2>
						<StyledH2>
							{lang
								? data && data.header.sv
								: data && data.header.en}
						</StyledH2>
						<CardContainer>
							<StyledCard
								onClick={() => {
									sliderRef.current.scrollIntoView()
									setConceptSlide('Communicate')
								}}
							>
								{lang ? 'Kommunikation' : 'Communicate'}
							</StyledCard>
							<StyledCard
								onClick={() => {
									sliderRef.current.scrollIntoView()
									setConceptSlide('Compliance')
								}}
							>
								{lang ? 'Drift' : 'Operations'}
							</StyledCard>
							<StyledCard
								onClick={() => {
									sliderRef.current.scrollIntoView()
									setConceptSlide('E-learning')
								}}
							>
								{lang ? 'Utbildning' : 'Education'}
							</StyledCard>
						</CardContainer>
						<StyledH3>
							{lang
								? data && data.subHeader.sv
								: data && data.subHeader.en}
						</StyledH3>
					</StyledDiv2>
				</StyledSection>
				<StyledSection2 ref={sliderRef}>
					<StyledSlideContainer>
						<StyledSlider conceptSlide={conceptSlide}>
							<ComplianceSlide
								conceptSlide={conceptSlide}
								onClick={() =>
									setConceptSlide('Compliance')
								}
							>
								{lang ? 'Drift' : 'Operations'}
							</ComplianceSlide>
							<EducateSlide
								conceptSlide={conceptSlide}
								onClick={() =>
									setConceptSlide('E-learning')
								}
							>
								{lang ? 'Utbildning' : 'Education'}
							</EducateSlide>
							<CommunicateSlide
								conceptSlide={conceptSlide}
								onClick={() =>
									setConceptSlide('Communicate')
								}
							>
								{lang ? 'Kommunikation' : 'Communicate'}
							</CommunicateSlide>
						</StyledSlider>
					</StyledSlideContainer>
					<StyledConceptDiv conceptSlide={conceptSlide}>
						{conceptSlide === 'Compliance' ? (
							<Compliance conceptSlide={conceptSlide} />
						) : conceptSlide === 'E-learning' ? (
							<Educate conceptSlide={conceptSlide} />
						) : (
							<Communicate conceptSlide={conceptSlide} />
						)}
					</StyledConceptDiv>
				</StyledSection2>
				<Contact />
			</Wrapper>
		</>
	)
}

export default LandingPage
