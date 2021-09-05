import React, { useState, useRef, useEffect, useContext } from 'react'
import styled from 'styled-components'
import Snackbar from '@material-ui/core/Snackbar'
import IconButton from '@material-ui/core/IconButton'
import CloseIcon from '@material-ui/icons/Close'
import emailjs from 'emailjs-com'
import { motion } from 'framer-motion'
import { LanguageContext } from '../App'
import Button from '../components/Button'
/* import axios from 'axios' */
/* import Form from '../components/Form' */

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
	height: 100%;
	display: flex;
	justify-content: space-around;
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
	height: 56px;
	text-align: center;
	border: 1px solid;
	border-color: ${(props) => props.theme.color};
	filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
	border-radius: 2px;
	display: flex;
	border-radius: 15px;
	justify-content: center;
	color: ${(props) => props.theme.color};
	align-items: center;
	background-color: ${({ theme }) => theme.white};
	img {
		display: none;
	}

	@media (max-width: 968px) {
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

const StyledForm = styled.form`
	display: flex;
	flex-direction: column;
	margin-top: -250px;
	width: 460px;

	button {
		margin-top: 40px;
	}

	@media (max-width: 968px) {
		width: 95%;
		padding: 0 10px 20px 10px;

		margin-top: 0px;
		padding-top: 40px;

		background: ${({ theme }) => theme.white};
		border-radius: 0 0 15px 15px;
		button {
			margin: 80px 0 0 5px;
		}
	}
`

const StyledInput = styled(motion.input)`
	border: none;
	border-bottom: 3px solid #c0cbc4;
	padding-bottom: 10px;
	background-color: #fafafa;
	margin-top: 90px;
	outline: none;

	::-webkit-input-placeholder {
		font-family: 'Montserrat';
		font-weight: 600;
	}

	:-ms-input-placeholder {
		font-family: 'Montserrat';
		font-weight: 600;
	}

	:-moz-placeholder {
		font-family: 'Montserrat';
		font-weight: 600;
	}

	::-moz-placeholder {
		font-family: 'Montserrat';
		font-weight: 600;
	}

	::placeholder {
		color: ${(props) => props.theme.color};
		@media (max-width: 968px) {
			background-color: ${({ theme }) => theme.white};
		}
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
	@media (max-width: 968px) {
		-webkit-appearance: none;
		-moz-appearance: none;
		appearance: none;

		margin-top: 40px;
		font-size: 0.8rem;
		background-color: ${({ theme }) => theme.white};
		border-bottom: none;
		border: 2px dotted ${({ theme }) => theme.whiteOf};

		padding: 17px 15px;
		border-radius: 20px;
	}
`

const StyledCircle = styled.div`
	border-radius: 50%;
	width: 140px;
	height: 140px;
	position: absolute;
	z-index: 1;
	top: -50px;
	right: 50px;
	background: #ffd600;
	border: 4px solid white;
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

	/* const handleSubmit2 = async (e) => {
		e.preventDefault() // prevent form submit default behavior
		if (
			!nameRef.current.value ||
			!emailRef.current.value ||
			telephoneRef.current.value
		)
			return // if an input field is empty, don't submit the form
		const hubspot_response = await submit_hubspot_form(
			emailRef.current.value,
			nameRef.current.value,
			telephoneRef.current.Value
		)
		console.log(hubspot_response) // make sure it succeeded!
	} */

	/* const submit_hubspot_form = async (email, firstname, telephone) => {
		const portalId = '6998830' // example portal ID (not real)
		const formGuid = '48f871d1-553a-43b2-8d01-43cfa9f28786' // example form GUID (not real)
		const config = {
			// important!
			headers: {
				'Content-Type': 'application/json',
			},
		}

		const response = await axios
			.post(
				`https://api.hsforms.com/submissions/v3/integration/submit/${portalId}/${formGuid}`,
				{
					portalId,
					formGuid,
					fields: [
						{
							name: 'firstname',
							value: firstname,
						},
						{
							name: 'email',
							value: email,
						},
						{
							name: 'telephone',
							value: telephone,
						},
					],
				},
				config
			)
			.then(() => console.log('Funkade!'))

		emailRef.current.value = ''
		nameRef.current.value = ''
		telephoneRef.current.value = ''
		return response
	} */

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
					<StyledImgDiv>
						<StyledImg
							src='https://ik.imagekit.io/lct7da3kd6o/Zittron/tr:w-500/Resurs_3_4x_J2lQ-3Lr7t5.png?updatedAt=1629718409148'
							alt='task manager'
						/>
					</StyledImgDiv>
					<StyledUl>
						{data
							? data.contactInfo.map((li, ind) => {
									return (
										<StyledLi key={ind}>
											{li.toUpperCase()}
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
						<StyledP>Contact form</StyledP>
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
						<Button>{lang ? 'SKICKA' : 'SUBMIT'}</Button>
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
