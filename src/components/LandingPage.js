import React, { useState, useRef } from 'react'
import styled from 'styled-components'
import Footer from './Footer'
import Macbook from '../img/macbook.png'
import Communicate from '../components/Communicate'
import Educate from '../components/Educate'
import Compliance from '../components/Compliance'

const Wrapper = styled.section`
	width: 100vw;
	background-color: #fff;
`

const StyledDiv = styled.div`
	height: 100%;
	width: 50%;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	text-align: center;
`

const StyledH2 = styled.h2`
	font-size: 4rem;
	width: 100%;
`
const StyledH3 = styled.h3`
	width: 80%;
	font-size: 1.5rem;
	margin-top: 20px;
`

const StyledDivDesign = styled.div`
	width: 80%;
	height: 90%;
	border-radius: 50px 50px 0 0;
	background: ${({ theme }) => theme.primary};
	display: flex;
	justify-content: center;
	flex-direction: column;
	align-items: center;
	margin-bottom: -80px;
	box-shadow: 10px 10px 0px #cbcbcb;
`

const StyledH4 = styled.h4`
	text-align: center;
	color: ${({ theme }) => theme.white};
	margin-top: 20px;
	font-size: 1.5rem;
	width: 60%;
`

const StyledImg = styled.img``

const StyledConceptDiv = styled.div`
	height: 80vh;
	background: ${({ theme, conceptSlide }) =>
		conceptSlide === 'Compliance'
			? theme.primary90
			: conceptSlide === 'Educate'
			? theme.primary70
			: theme.primary50};
	width: 100%;
	display: flex;
	justify-content: center;
	align-items: center;
	border-radius: 0 0 50px 50px;
	margin-bottom: 20px;
	transition: all 0.5s linear;
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
		conceptSlide === 'Educate' ? theme.primary60 : 'transparent'};
	color: ${({ theme, conceptSlide }) =>
		conceptSlide === 'Educate' ? 'white' : theme.primary60};
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
`

const StyledSection = styled.section`
	background-color: ${({ bg }) => bg};
	width: 100vw;
	height: 100vh;
	display: flex;
	flex-direction: ${({ direction }) => direction};
	overflow: hidden;
	padding-left: 40px;
	padding-right: 40px;
`

const StyledSection2 = styled(StyledSection)`
	width: 100vw;
	display: flex;
	align-items: center;
	flex-direction: column;
`

const CardContainer = styled.div`
	display: flex;
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
	color: ${({ theme }) => theme.primary};
	background: #fafafa;
	box-shadow: 2px 2px 0px ${({ theme }) => theme.primary70};

	:hover {
		transform: scale(1.1);
	}
`

const LandingPage = ({ myRef }) => {
	const [conceptSlide, setConceptSlide] = useState('Educate')
	const sliderRef = useRef()

	return (
		<>
			<Wrapper ref={myRef}>
				<StyledSection direction='row' bg='#FCF1B7'>
					<StyledDiv>
						<StyledH2>Virtual Concept Manager</StyledH2>
						<CardContainer>
							<StyledCard
								onClick={() => {
									sliderRef.current.scrollIntoView()
									setConceptSlide('Communicate')
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
								Checklists
							</StyledCard>
							<StyledCard
								onClick={() => {
									sliderRef.current.scrollIntoView()
									setConceptSlide('Educate')
								}}
							>
								E-learning
							</StyledCard>
						</CardContainer>
						<StyledH3>
							Connect all your units and employees in to
							one app. Save money, be more efficient and be
							a part of saving the planet by less commute,
							travelling and all the surrounding eco system
						</StyledH3>
					</StyledDiv>
					<StyledDiv>
						<StyledDivDesign>
							<StyledImg
								src={Macbook}
								alt='demo picture'
							/>
							<StyledH4>
								Desktop app for managers and mobile app
								for employees
							</StyledH4>
						</StyledDivDesign>
					</StyledDiv>
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
								Compliance
							</ComplianceSlide>
							<EducateSlide
								conceptSlide={conceptSlide}
								onClick={() =>
									setConceptSlide('Educate')
								}
							>
								Educate
							</EducateSlide>
							<CommunicateSlide
								conceptSlide={conceptSlide}
								onClick={() =>
									setConceptSlide('Communicate')
								}
							>
								Communicate
							</CommunicateSlide>
						</StyledSlider>
					</StyledSlideContainer>
					<StyledConceptDiv conceptSlide={conceptSlide}>
						{conceptSlide === 'Compliance' ? (
							<Compliance conceptSlide={conceptSlide} />
						) : conceptSlide === 'Educate' ? (
							<Educate conceptSlide={conceptSlide} />
						) : (
							<Communicate conceptSlide={conceptSlide} />
						)}
					</StyledConceptDiv>
				</StyledSection2>
				<StyledSection bg='#ccc'></StyledSection>
				<Footer />
			</Wrapper>
		</>
	)
}

export default LandingPage
