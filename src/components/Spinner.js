import React from 'react'
import styled from 'styled-components'
import SpinnerImg from '../img/spinner.png'

const StyledImg = styled.img`
	animation-duration: 2s;
	animation-iteration-count: infinite;
	animation-name: spin;
	width: 50px;

	@keyframes spin {
		from {
			transform: rotate(0deg);
		}
		to {
			transform: rotate(360deg);
		}
	}
`

const Spinner = () => {
	return (
		<>
			<StyledImg src={SpinnerImg} alt='spinner' />
		</>
	)
}

export default Spinner
