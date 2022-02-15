import React, { useState, useContext } from 'react'
import styled from 'styled-components'
import { motion } from 'framer-motion'
import Button from './Button'
import { LanguageContext } from '../App'

const StyledForm = styled.form`
	display: flex;
	flex-direction: column;
	padding: 1.5rem;
	margin-top: 1rem;
	width: fit-content;
	max-width: 400px;

	* {
		color: white;
	}

	input[type='checkbox'] {
		margin: 20px 10px 20px 0.5rem;
	}
	p,
	label {
		color: white;
	}

	button {
		margin-top: 40px;
	}
`

const StyledInput = styled(motion.input)`
	border: none;
	border: 1px solid white;
	border-radius: 10px;
	display: flex;
	align-items: center;
	padding: 1rem;

	background-color: transparent;
	margin-top: 1.5rem;

	::-webkit-input-placeholder {
		font-family: 'Montserrat';
	}

	:-ms-input-placeholder {
		font-family: 'Montserrat';
	}

	:-moz-placeholder {
		font-family: 'Montserrat';
	}

	::-moz-placeholder {
		font-family: 'Montserrat';
	}

	::placeholder {
		color: ${(props) => props.theme.white};
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
`

const StyledP = styled.p`
	font-size: 0.7rem;
	padding: 10px;
`

const CheckDiv = styled.div`
	display: flex;
	align-items: center;
`

const Form = () => {
	const portalId = '6998830'
	const formGuid = '016322d8-a4e2-424b-9a41-b5d79bf31d3b'
	const [firstName, setFirstname] = useState('')
	const [email, setEmail] = useState('')
	const { lang } = useContext(LanguageContext)
	const [checked, setChecked] = useState(false)
	const [sent, setSent] = useState(false)

	const handleSubmit = (event) => {
		event.preventDefault()
		if (checked) {
			var xhr = new XMLHttpRequest()
			var url = `https://api.hsforms.com/submissions/v3/integration/submit/${portalId}/${formGuid}`

			var data = {
				submittedAt: Date.now(),
				fields: [
					{
						name: 'email',
						value: email,
					},

					{
						name: 'firstname',
						value: firstName,
					},
				],
				context: {
					pageName: 'Subscribe successful',
				},
			}
			var final_data = JSON.stringify(data)
			xhr.open('POST', url)

			xhr.setRequestHeader('Content-Type', 'application/json')

			xhr.send(final_data)
			setSent(true)
			setEmail('')
			setFirstname('')
			setChecked(false)
		} else alert('Please confirm the terms')
	}

	return (
		<StyledForm
			method="POST"
			action="/subscribe-success/"
			onSubmit={handleSubmit}
		>
			{sent ? (
				<h1>
					{lang
						? 'Tack, vi hör av oss så snart vi kan.'
						: 'Thank you! We will get back to you as soon as possible'}
				</h1>
			) : (
				<>
					<StyledInput
						type="text"
						id="firstName"
						name="firstName"
						placeholder={lang ? 'Namn*' : 'Your name*'}
						value={firstName}
						onChange={(e) => setFirstname(e.target.value)}
					/>

					<StyledInput
						type="email"
						id="email"
						name="email"
						placeholder={lang ? 'Email' : 'Your email address*'}
						value={email}
						onChange={(e) => setEmail(e.target.value)}
						required="required"
					/>

					<CheckDiv>
						<input
							id="terms"
							type="checkbox"
							checked={checked}
							onChange={() => setChecked((prevState) => !prevState)}
						/>
						<label htmlFor="terms">
							{' '}
							{lang ? 'Acceptera villkoren (engelska)' : 'I accept the terms'}
						</label>
					</CheckDiv>
					<StyledP>
						Konceptify AB is committed to protecting and respecting your
						privacy, and we’ll only use your personal information to administer
						your account and to provide the products and services you requested
						from us. From time to time, we would like to contact you about our
						products and services, as well as other content that may be of
						interest to you. If you consent to us contacting you for this
						purpose, please tick below to say how you would like us to contact
						you:
					</StyledP>
					<Button>{lang ? 'SKICKA' : 'SUBMIT'}</Button>
				</>
			)}
		</StyledForm>
	)
}

export default Form
