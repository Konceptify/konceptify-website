import React from 'react'
import Form from '../components/FormModal'
import styled from 'styled-components'

const Wrapper = styled.main`
	height: 100vh;
	width: 100vw;
`

const DemoModalBackground = styled.div`
	width: 100vw;
	height: 100vh;
	inset: 0;
	display: grid;
	position: sticky;
	place-items: center;

	z-index: 100000;
	position: absolute;
	background: rgba(255, 255, 255, 0.6);
	overflow: hidden;

	path {
		stroke: black;
	}

	.modal {
		background: ${({ theme }) => theme.primary90};
		position: absolute;
		border-radius: 10px;
		@media (max-width: 400px) {
			width: 90%;
		}

		svg {
			position: absolute;
			top: 1rem;
			z-index: 1000000000;
			right: 1rem;
			cursor: pointer;
			path {
				stroke: white;
			}
		}
	}
`

function requestDemo() {
	return (
		<Wrapper>
			<DemoModalBackground>
				<div className="modal">
					<Form />
				</div>
			</DemoModalBackground>
		</Wrapper>
	)
}

export default requestDemo
