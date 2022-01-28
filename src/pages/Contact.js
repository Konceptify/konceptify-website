import React, { useState, useEffect, useContext } from 'react'
import styled from 'styled-components'
import Snackbar from '@material-ui/core/Snackbar'
import IconButton from '@material-ui/core/IconButton'
import CloseIcon from '@material-ui/icons/Close'

import { LanguageContext } from '../App'
import Form from '../components/Form'

import sanityClient from '../client'

const Wrapper = styled.section`
	height: 100vh;
	width: 100%;
	display: flex;
	justify-content: flex-start;
	align-items: center;
	position: relative;
	margin-top: 100px;
	z-index: 2;
	background: #fafafa;

	@media (max-width: 968px) {
		flex-direction: column;
		align-items: center;
		justify-content: flex-start;
		height: auto;
		margin-top: 40px;
	}
`

const StyledDiv = styled.div`
	width: 100%;
	display: flex;
	align-items: center;
	flex-direction: column;

	@media (max-width: 968px) {
		width: 100vw;
		height: 54%;
	}
`
const StyledDiv1 = styled.div`
	width: 80%;
	height: 85%;
	display: flex;
	position: relative;

	border-radius: 50px 50px 10px 10px;
	margin: 0 0 20px 50px;
	justify-content: center;

	align-items: center;
	flex-direction: column;
	box-shadow: 10px 10px 0px #cbcbcb;
	background-color: ${(props) => props.theme.primary90};
	@media (max-width: 968px) {
		display: none;
	}
`

const StyledUl = styled.ul`
	display: flex;
	position: absolute;
	justify-content: space-evenly;
	padding-bottom: 10px;
	bottom: 0px;
	width: 100%;
	background-color: ${({ theme }) => theme.primary};
	border-radius: 0px 0px 10px 10px;
	li {
		margin: 0 10px;
	}
	@media (max-width: 968px) {
	}
`

const StyledLi = styled.li`
	font-family: Montserrat;
	font-style: normal;
	font-weight: 200;
	list-style: none;
	font-size: 0.8vw;
	line-height: 2rem;
	padding: 5px;
	text-align: center;
	letter-spacing: 1px;
	color: #fff;

	@media (max-width: 968px) {
		color: black;
	}
`

const StyledH2 = styled.h2`
	font-size: 3vw;
	margin-bottom: 20px;
	color: ${({ theme }) => theme.white};
`

const StyledP = styled.p`
	font-weight: 600;
	margin-left: 15px;

	@media (max-width: 968px) {
		font-size: 1.5rem;
		font-weight: 700;
	}
`

const StyledDivFormHeader = styled.div`
	width: 460px;
	display: none;
	height: 56px;
	text-align: center;
	border: 1px solid;
	border-color: ${(props) => props.theme.color};
	filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
	border-radius: 2px;

	border-radius: 15px;
	justify-content: center;
	color: ${(props) => props.theme.color};
	align-items: center;
	background-color: ${({ theme }) => theme.white};
	img {
		display: none;
	}

	@media (max-width: 968px) {
		display: flex;
		img {
			display: block;
		}
		filter: none;
		border: none;
		justify-content: flex-start;
		color: ${({ theme }) => theme.white};
		padding-left: 20px;
		margin-bottom: 0px;
		font-size: 2.5rem;
		background-color: ${({ theme }) => theme.primary90};
		border-radius: 20px;
		width: 95%;
	}
`

const StyledImgDiv = styled.div`
	width: 25vw;
	height: 25vw;
	background: ${({ theme }) => theme.primary70};
	padding: 40px;
	border-radius: 50%;
	display: flex;
	justify-content: center;
	align-items: center;
`

const StyledImg = styled.img`
	@media (max-width: 1768px) {
		width: 20vw;
	}
`

const Contact = () => {
	const [open, setOpen] = useState(false)

	const [data, setData] = useState(null)
	const { lang, snackbarMessage } = useContext(LanguageContext)

	useEffect(() => {
		sanityClient
			.fetch(
				`*[_type == "contact"] {
                title,
				contactInfo,
				replyBanner
            }`
			)
			.then((data) => setData(data[0]))
			.catch((error) => console.log(error))
	}, [])

	const handleClose = (event, reason) => {
		if (reason === 'clickaway') {
			return
		}
		setOpen(false)
	}

	return (
		<>
			<Wrapper>
				<StyledDiv1>
					<StyledH2>
						{data ? (lang ? data.title.sv : data.title.en) : null}
					</StyledH2>
					<StyledImgDiv>
						<StyledImg
							src="https://ik.imagekit.io/lct7da3kd6o/Zittron/tr:w-500/Resurs_3_4x_J2lQ-3Lr7t5.png?updatedAt=1629718409148"
							alt="task manager"
						/>
					</StyledImgDiv>
					<StyledUl>
						{data
							? data.contactInfo.map((li, ind) => {
									return <StyledLi key={ind}>{li.toUpperCase()}</StyledLi>
							  })
							: null}
					</StyledUl>
				</StyledDiv1>
				<StyledDiv>
					<StyledDivFormHeader>
						<StyledP>Contact form</StyledP>
					</StyledDivFormHeader>

					<Form />
				</StyledDiv>
				<Snackbar
					anchorOrigin={{
						vertical: 'bottom',
						horizontal: 'left',
					}}
					open={open}
					autoHideDuration={3000}
					onClose={handleClose}
					message={snackbarMessage}
					action={
						<>
							<IconButton
								size="small"
								aria-label="close"
								color="inherit"
								onClick={handleClose}
							>
								<CloseIcon fontSize="small" />
							</IconButton>
						</>
					}
				/>
			</Wrapper>
		</>
	)
}

export default Contact
