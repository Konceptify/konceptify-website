import React, { useState, useEffect, useContext } from 'react'
import styled from 'styled-components'

import Communications from '../components/Communicate'
import Educate from '../components/Educate'
import Compliance from '../components/Compliance'
import Contact from '../pages/Contact'
import Measure from './Measure'
import sanityClient from '../client'
import Video from '../img/animated-video.mp4'
import { LanguageContext } from '../App'
import { toCapitalCase } from '../utils/utils'

const Wrapper = styled.section`
	width: 100vw;
	background-color: #fff;
`

const StyledDiv1 = styled.div`
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
	width: 50%;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	position: relative;

	text-align: center;
	@media (max-width: 976px) {
		width: 100%;
		padding-top: 2rem;
	}
`

const StyledH2 = styled.h2`
	font-size: 4rem;
	width: 100%;
	font-weight: 700;
	position: relative;
	z-index: 10;
	color: ${({ theme }) => theme.color};
	@media (max-width: 976px) {
		font-size: 2rem;
		font-weight: 700;
		text-align: center;
		margin-bottom: 30px;
	}
`
const StyledH3 = styled.h3`
	width: 80%;
	font-size: 1rem;
	text-align: left;
	margin-top: 20px;
	font-weight: 200;
	position: relative;
	z-index: 10;
	@media (max-width: 976px) {
		width: 100%;
		text-align: left;
		margin-bottom: -150px;
	}
`

const StyledDivDesign = styled.div`
	/* background: ${({ theme }) => theme.primary60}; */
	display: flex;
	justify-content: center;

	align-items: center;

	video {
		width: 60vw;
		margin: 0 2rem;
	}

	@media (max-width: 976px) {
		width: 100%;
		video {
			width: 200%;
			margin: 8rem 2rem;
		}
	}
`

const StyledH4 = styled.h4``

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
const CommunicationsSlide = styled.div`
	border-radius: 30px;

	width: 33%;
	height: 100%;
	display: flex;
	justify-content: center;
	align-items: center;
	cursor: pointer;
	background: ${({ theme, conceptSlide }) =>
		conceptSlide === 'Communications' ? theme.primary60 : 'transparent'};
	color: ${({ theme, conceptSlide }) =>
		conceptSlide === 'Communications' ? 'white' : theme.primary60};
	@media (max-width: 976px) {
		font-size: 0.7rem;
	}
`

const StyledSection = styled.section`
	background-color: ${({ bg }) => bg};
	width: 100vw;

	display: flex;
	flex-direction: ${({ direction }) => direction};
	overflow: hidden;
	padding: 0 40px;

	@media (max-width: 700px) {
		width: 100vw;
		min-height: 50vh;

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
	min-width: 8rem;
	padding: 1em 2em;
	display: flex;
	justify-content: center;
	align-items: center;
	margin: 20px 10px;
	border-radius: 100vw;
	cursor: pointer;
	color: ${({ theme }) => theme.white};
	background-color: ${({ theme }) => theme.primary};
	box-shadow: 2px 2px 0px ${({ theme }) => theme.primary70};

	@media (max-width: 976px) {
		width: 100px;
		height: 45px;
		padding: 20px 20px;
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
					header,
					subHeader,
					underImage,
				})
			})
			.catch((error) => console.log(error))
	}, [])

	return (
		<>
			<Wrapper ref={myRef}>
				<StyledSection direction="row" bg="#fff">
					<StyledDiv1>
						<StyledDivDesign>
							{data && (
								<video autoPlay loop muted playsInline>
									<source src={Video} type="video/mp4" />
								</video>
							)}
						</StyledDivDesign>
					</StyledDiv1>
					<StyledDiv2>
						<StyledH2>
							{lang
								? data && toCapitalCase(data.header.sv)
								: data && toCapitalCase(data.header.en)}
						</StyledH2>
						<CardContainer>
							<StyledCard
								onClick={() => {
									sliderRef.current.scrollIntoView()
									setConceptSlide('Communications')
								}}
							>
								Chat
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
								{lang ? 'Utbildning' : 'Academy'}
							</StyledCard>
						</CardContainer>
						<StyledH3>
							{lang ? data && data.subHeader.sv : data && data.subHeader.en}
						</StyledH3>
					</StyledDiv2>
				</StyledSection>
				<StyledSection2 ref={sliderRef}>
					<StyledSlideContainer>
						<StyledSlider conceptSlide={conceptSlide}>
							<ComplianceSlide
								conceptSlide={conceptSlide}
								onClick={() => setConceptSlide('Compliance')}
							>
								{lang ? 'Drift' : 'Operations'}
							</ComplianceSlide>
							<EducateSlide
								conceptSlide={conceptSlide}
								onClick={() => setConceptSlide('E-learning')}
							>
								{lang ? 'Utbildning' : 'Academy'}
							</EducateSlide>
							<CommunicationsSlide
								conceptSlide={conceptSlide}
								onClick={() => setConceptSlide('Communications')}
							>
								{lang ? 'Kommunikation' : 'Communications'}
							</CommunicationsSlide>
						</StyledSlider>
					</StyledSlideContainer>
					<StyledConceptDiv conceptSlide={conceptSlide}>
						{conceptSlide === 'Compliance' ? (
							<Compliance conceptSlide={conceptSlide} />
						) : conceptSlide === 'E-learning' ? (
							<Educate conceptSlide={conceptSlide} />
						) : (
							<Communications conceptSlide={conceptSlide} />
						)}
					</StyledConceptDiv>
				</StyledSection2>
				<Measure />
				<Contact />
			</Wrapper>
		</>
	)
}

export default LandingPage
