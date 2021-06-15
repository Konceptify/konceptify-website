import React, { useState, useRef } from 'react'
import styled from 'styled-components'
import Snackbar from '@material-ui/core/Snackbar'
import IconButton from '@material-ui/core/IconButton'
import CloseIcon from '@material-ui/icons/Close'
import apiKey from '../emailkey'
import emailjs from 'emailjs-com'

import Background from '../Rectangle 2977.png'

const Wrapper = styled.section`
	height: 100vh;
	width: 100%;
	display: flex;
	justify-content: flex-start;
	align-items: center;
	position: relative;
	z-index: 2;

	@media (max-width: 768px) {
		flex-direction: column;
	}
`

const StyledImg = styled.img`
	position: absolute;
	width: 55%;

	@media (max-width: 768px) {
		display: none;
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
		width: 90vw;
		justify-content: flex-start;
		margin-top: 20%;
	}
`

const StyledH1 = styled.h1`
	font-family: Montserrat;
	font-style: normal;
	font-weight: bold;
	font-size: 5vw;
	line-height: 73px;
	text-align: center;
	letter-spacing: -2px;
	color: #fff;
	@media (max-width: 768px) {
		color: #000;
		font-size: 2.5rem;

		letter-spacing: 0;
		width: 100%;
		line-height: normal;
	}
`

const StyledUl = styled.ul`
	@media (max-width: 768px) {
		display: none;
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

const StyledP = styled.p`
	font-weight: 600;
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
	background-color: ${({ theme }) => theme.backgroundColor};

	@media (max-width: 768px) {
		display: none;
	}
`

const StyledForm = styled.form`
	display: flex;
	flex-direction: column;
	margin-top: -250px;
	width: 460px;

	@media (max-width: 768px) {
		width: 100%;
		padding: 10px;
		margin-top: -300px;
	}
`

const StyledInput = styled.input`
	border: none;
	border-bottom: 3px solid #c0cbc4;
	padding: 0 0 10px 0;
	background-color: ${(props) => props.theme.backgroundColor};
	margin-top: 90px;
	outline: none;

	::placeholder {
		color: ${(props) => props.theme.color};
	}

	:focus::-webkit-input-placeholder {
		color: #ccc;
	}
	@media (max-width: 768px) {
		margin-top: 50px;
		font-size: 16px;
	}
`

const StyledBtn = styled.button`
	border: none;
	background-color: ${(props) => props.theme.btnBgColor};
	color: ${(props) => props.theme.backgroundColor};
	border: 1px solid #212a25;
	box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
	border-radius: 10px;
	height: 50px;
	margin-top: 80px;
	cursor: pointer;
`

const Contact = () => {
	const [open, setOpen] = useState(false)
	const [snackbarMessage, setSnackbarMessage] = useState('')

	const emailRef = useRef()
	const nameRef = useRef()
	const telephoneRef = useRef()

	const handleSubmit = (e) => {
		e.preventDefault()
		console.log(e.target)
		if (
			emailRef.current.value &&
			nameRef.current.value &&
			telephoneRef.current.value
		) {
			emailjs
				.sendForm(
					apiKey.SERVICE_ID,
					apiKey.TEMPLATE_ID,
					e.target,
					apiKey.USER_ID
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
	}

	const handleClose = (event, reason) => {
		if (reason === 'clickaway') {
			return
		}
		setOpen(false)
	}

	return (
		<>
			<StyledImg src={Background} />

			<Wrapper>
				<StyledDiv>
					<StyledH1>Dont hesitate to reach out</StyledH1>
					<StyledUl>
						<StyledLi>GREV TUREGATAN 3</StyledLi>
						<StyledLi>+46 8 124 104 68</StyledLi>
						<StyledLi>GOVIRTUAL@ZITTRON.COM</StyledLi>
					</StyledUl>
				</StyledDiv>
				<StyledDiv>
					<StyledDivFormHeader>
						<StyledP>Lets connect</StyledP>
					</StyledDivFormHeader>
					<StyledForm onSubmit={handleSubmit}>
						<StyledInput
							placeholder='Name'
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
							placeholder='Telephone'
							ref={telephoneRef}
						/>
						<StyledBtn>SEND</StyledBtn>
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
