import React from 'react'
import styled from 'styled-components'

const StyledDiv = styled.div`
	#top,
	#bottom {
		transition: stroke-dashoffset 0.5s cubic-bezier(0.4, 0, 0.2, 1);
	}

	#middle {
		opacity: 1;
		transition: opacity 0.5s cubic-bezier(0.4, 0, 0.2, 1);
	}

	.line {
		fill: none;
		stroke: #000;
		stroke-miterlimit: 10;
		stroke-width: 3px;
	}

	path {
		stroke-dasharray: 25 45;
		stroke-dashoffset: 0;
	}

	button {
		background: none;
		border: none;
	}

	.x #middle {
		opacity: 0;
	}

	.x #top,
	.x #bottom {
		stroke-dashoffset: -45;
	}
`

export default function Hamburger({ openNav }) {
	return (
		<StyledDiv>
			<div id='hamburger' className={`${openNav ? 'x' : null}`}>
				<svg
					id='Layer_1'
					data-name='Layer 1'
					xmlns='http://www.w3.org/2000/svg'
					width='100'
					height='100'
					viewBox='0 0 75 70'
				>
					<path
						id='top'
						className='line'
						d='M166.18,102.56h25s7.52-.43,5-5.29c-2.89-5.65-8.7,2.07-8.7,2.07L169.84,117'
						transform='translate(-166.18 -94.7)'
					/>
					<path
						id='bottom'
						className='line'
						d='M166.18,113.77h25s7.52.43,5,5.29c-2.89,5.64-8.7-2.07-8.7-2.07L169.84,99.31'
						transform='translate(-166.18 -94.7)'
					/>
					<line
						id='middle'
						className='line'
						y1='13.48'
						x2='25'
						y2='13.48'
						x1='0'
					/>
				</svg>
			</div>
		</StyledDiv>
	)
}
