import React, { useState } from 'react'
import axios from 'axios'

const Form = () => {
	const [name, setName] = useState('')
	const [email, setEmail] = useState('')
	const [tele, setTele] = useState('')

	const handleSubmit = async (e) => {
		e.preventDefault() // prevent form submit default behavior
		if (!name || !email || !tele) return // if an input field is empty, don't submit the form
		const hubspot_response = await submit_hubspot_form(email, name, tele)
		console.log(hubspot_response) // make sure it succeeded!
	}

	const submit_hubspot_form = async (email, firstname, tele) => {
		const portalId = '6998830' // example portal ID (not real)
		const formGuid = '99da4c7a-2c07-4f59-945d-2081fd276e7a' // example form GUID (not real)
		const config = {
			// important!
			headers: {
				'Content-Type': 'application/json',
			},
		}

		const response = await axios.post(
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
					/* {
						name: 'tele',
						value: tele,
					}, */
				],
			},
			config
		)
		return response
	}

	return (
		<div style={{ padding: '16px' }}>
			<h1>HubSpot Test Form</h1>
			<form onSubmit={handleSubmit}>
				<input
					name='firstname'
					type='text'
					value={name}
					onChange={(e) => setName(e.target.value)}
				/>
				<input
					name='email'
					type='email'
					value={email}
					onChange={(e) => setEmail(e.target.value)}
				/>
				<input
					name='telephone'
					type='tel'
					value={tele}
					onChange={(e) => setTele(e.target.value)}
				/>
				<input type='submit' value='Submit' />
			</form>
		</div>
	)
}

export default Form
