import React, { useEffect, useState } from 'react'
import styled from 'styled-components'

import sanityClient from '../client'

const Wrapper = styled.div`
	height: 100vh;
	width: 100vw;
	display: flex;
	padding: 100px 20px;
	flex-direction: column;

	p {
		width: 100ch;
	}
`

const Legal = () => {
	const [policy, setPolicy] = useState([])
	useEffect(() => {
		sanityClient
			.fetch(
				`*[_type == "legal"] {
                title,
				file,
				"privacyPDFURL": privacyPDF.asset->url
            }`
			)
			.then((data) => setPolicy(data[0]))
			.catch((error) => console.log(error))
	}, [])

	return (
		<Wrapper>
			<h1>Legal</h1>
			{policy && (
				<a href={`${policy.privacyPDFURL}?dl=`}>Privacy Policy</a>
			)}
		</Wrapper>
	)
}

export default Legal
