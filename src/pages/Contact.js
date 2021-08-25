import React, { useState, useRef, useEffect, useContext } from 'react'
import styled from 'styled-components'
import Snackbar from '@material-ui/core/Snackbar'
import IconButton from '@material-ui/core/IconButton'
import CloseIcon from '@material-ui/icons/Close'
import emailjs from 'emailjs-com'
import { motion } from 'framer-motion'
import { IoMdArrowRoundForward } from 'react-icons/io'
import { LanguageContext } from '../App'

import sanityClient from '../client'

const Wrapper = styled.section`
	height: 100vh;
	width: 100%;
	display: flex;
	justify-content: flex-start;
	align-items: flex-end;
	position: relative;
	z-index: 2;
	background: #fafafa;

	@media (max-width: 768px) {
		flex-direction: column;
		align-items: center;
		justify-content: flex-start;
	}
`

const StyledDiv = styled.div`
	width: 100%;
	height: 100%;
	display: flex;
	justify-content: space-around;
	align-items: center;
	flex-direction: column;

	@media (max-width: 768px) {
		width: 100vw;
	}
`
const StyledDiv1 = styled.div`
	width: 80%;
	height: 85%;
	display: flex;
	position: relative;

	border-radius: 50px 50px 0 0;
	margin: 0 0 20px 50px;
	justify-content: center;

	align-items: center;
	flex-direction: column;
	background-color: ${(props) => props.theme.primary80};
	@media (max-width: 768px) {
		display: none;
	}
`

const StyledUl = styled.ul`
	display: flex;
	position: absolute;
	bottom: 10px;
	li {
		margin: 0 10px;
	}
	@media (max-width: 768px) {
	}
`

const StyledLi = styled.li`
	font-family: Montserrat;
	font-style: normal;
	font-weight: 200;
	list-style: none;
	font-size: 1rem;
	line-height: 2rem;
	padding: 5px;
	text-align: center;
	letter-spacing: 1px;
	color: #fff;

	@media (max-width: 768px) {
		color: black;
	}
`

const StyledH2 = styled.h2`
	font-size: 3vw;
	margin-bottom: 60px;
	color: ${({ theme }) => theme.white};
`

const StyledP = styled.p`
	font-weight: 600;
	margin-left: 15px;
`

const StyledDivFormHeader = styled.div`
	width: 460px;
	height: 56px;
	text-align: center;
	border: 1px solid;
	border-color: ${(props) => props.theme.color};
	filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
	border-radius: 2px;
	display: flex;
	justify-content: center;
	color: ${(props) => props.theme.color};
	align-items: center;
	background-color: ${({ theme }) => theme.white};
	img {
		display: none;
	}

	@media (max-width: 768px) {
		img {
			display: block;
		}
		filter: drop-shadow(0px 0px 0px rgba(0, 0, 0, 0.25));
		border: none;
		justify-content: flex-start;
		padding-left: 60px;
		font-size: 2.5rem;
	}
`

const StyledForm = styled.form`
	display: flex;
	flex-direction: column;
	margin-top: -250px;
	width: 460px;

	@media (max-width: 768px) {
		width: 95%;
		padding: 0 10px 20px 10px;
		margin: 10px 10px;
		margin-top: -200px;
		background: ${({ theme }) => theme.primary70};
		border-radius: 20px;
	}
`

const StyledInput = styled(motion.input)`
	border: none;
	border-bottom: 3px solid #c0cbc4;
	padding-bottom: 10px;
	background-color: #fafafa;
	margin-top: 90px;
	outline: none;

	::placeholder {
		color: ${(props) => props.theme.color};
	}

	:hover {
		::placeholder {
			font-size: 0.8rem;
			transition-duration: 1s;
			color: #ccc;
		}
	}

	:focus::-webkit-input-placeholder {
		color: #ccc;
	}
	@media (max-width: 768px) {
		margin-top: 50px;
		font-size: 16px;
		border-bottom: none;
		padding: 10px 15px;
		border-radius: 10px;
	}
`

const StyledBtn = styled.button`
	border: none;
	background-color: ${(props) => props.theme.primary};
	color: ${(props) => props.theme.white};
	border: 1px solid #212a25;
	box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
	border-radius: 20px;
	height: 48px;
	margin-top: 80px;
	cursor: pointer;
	font-size: 1.2rem;
	padding: 20px 0px;
	width: 55%;
	display: flex;
	align-items: center;
	justify-content: center;

	svg {
		padding-top: 3px;
	}
`

const StyledCircle = styled.div`
	border-radius: 50%;
	width: 130px;
	height: 130px;
	position: absolute;
	z-index: 1;
	top: -50px;
	right: 50px;
	background: #ffd600;
	display: inline-flex;
	text-align: center;
	justify-content: center;
	align-items: center;
	color: ${({ theme }) => theme.white};
	font-weight: 700;
	font-size: 1.2rem;
	@media (max-width: 768px) {
	}
`

const Contact = () => {
	const [open, setOpen] = useState(false)
	const [snackbarMessage, setSnackbarMessage] = useState('')
	const [data, setData] = useState(null)
	const { lang } = useContext(LanguageContext)

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

	const emailRef = useRef()
	const nameRef = useRef()
	const telephoneRef = useRef()

	const handleSubmit = (e) => {
		e.preventDefault()

		if (
			emailRef.current.value &&
			nameRef.current.value &&
			telephoneRef.current.value
		) {
			emailjs
				.sendForm(
					process.env.REACT_APP_SERVICE_ID,
					process.env.REACT_APP_TEMPLATE_ID,
					e.target,
					process.env.REACT_APP_USER_ID
				)
				.then(
					(result) => {
						if (result.text === 'OK') {
							setOpen(true)
							setSnackbarMessage(
								'Submitted to a team member'
							)
						}
					},
					(error) => {
						alert(
							'An error occurred, Please try again',
							error.text
						)
					}
				)
		} else {
			setSnackbarMessage('Please fill in all info')
			setOpen(true)
		}

		emailRef.current.value = ''
		nameRef.current.value = ''
		telephoneRef.current.value = ''
	}

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
						{data
							? lang
								? data.title.sv
								: data.title.en
							: null}
					</StyledH2>
					<img
						src='https://ik.imagekit.io/lct7da3kd6o/Zittron/tr:w-400/Resurs_3_4x_J2lQ-3Lr7t5.png?updatedAt=1629718409148'
						alt='task manager'
					/>
					<StyledUl>
						{data
							? data.contactInfo.map((li, ind) => {
									return (
										<StyledLi key={ind}>
											{li}
										</StyledLi>
									)
							  })
							: null}
					</StyledUl>
					<StyledCircle>
						{data
							? lang
								? data.replyBanner.sv
								: data.replyBanner.en
							: null}
					</StyledCircle>
				</StyledDiv1>
				<StyledDiv>
					<StyledDivFormHeader>
						<img
							src='https://ik.imagekit.io/lct7da3kd6o/Zittron/Resurs_1_4x_iT35dIXf62.png?updatedAt=1629711469111'
							alt='logo'
							width='45'
						/>
						<StyledP>
							{lang
								? 'Get in touch with us'
								: 'Get in touch with us'}
						</StyledP>
					</StyledDivFormHeader>

					<StyledForm onSubmit={handleSubmit}>
						<StyledInput
							placeholder={lang ? 'Namn' : 'Name'}
							type='text'
							name='from_name'
							id='from_name'
							ref={nameRef}
						/>
						<StyledInput
							type='email'
							name='email'
							id='email'
							placeholder='Email'
							ref={emailRef}
						/>
						<StyledInput
							type='tel'
							name='phone'
							id='phone'
							placeholder={lang ? 'Telefon' : 'Telephone'}
							ref={telephoneRef}
						/>
						<StyledBtn>
							{lang ? 'Skicka' : 'Submit'}

							<IoMdArrowRoundForward size={30} />
						</StyledBtn>
					</StyledForm>
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
								size='small'
								aria-label='close'
								color='inherit'
								onClick={handleClose}
							>
								<CloseIcon fontSize='small' />
							</IconButton>
						</>
					}
				/>
			</Wrapper>
		</>
	)
}

export default Contact
